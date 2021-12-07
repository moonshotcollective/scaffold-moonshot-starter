// import apm from 'elastic-apm-node';
import { v4 } from 'uuid';
import { GraphQLFormattedError, GraphQLError } from 'graphql';
import { ApolloError } from 'apollo-server-core';
import {
  Logger,
  BadRequestException,
  ValidationError,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';

import { INTERNAL_SERVER_ERROR, BAD_USER_INPUT } from '../../constants/errors';
import { TooManyRequestsException } from './TooManyRequestsException.error';

interface ParameterizedMessageObject {
  message: string;
  params: any[];
}

interface ResultError {
  errId: string;
  errorCode: string | Error | ParameterizedMessageObject;
  formattedError?: GraphQLFormattedError;
  error: GraphQLError;
}
const formatValidationConstraints = (
  item: ValidationError,
  index?: number | null,
) =>
  item.constraints
    ? Object.values(item.constraints).map((constraint) => ({
        key: constraint,
        value: item.property !== 'password' ? item.value : null,
        property: item.property,
        index,
      }))
    : [];

const getNestedValidationsError = (
  errors: ValidationError[],
  parentProperty: readonly (string | number)[] | (string | number) | undefined,
): any => {
  return errors.flatMap((error) => {
    if (error?.children && error?.children.length > 0) {
      return getNestedValidationsError(error.children, error.property);
    }
    if (error.constraints && Object.keys(error.constraints).length > 0) {
      const index =
        typeof parentProperty === 'object'
          ? null
          : typeof parentProperty !== 'number' && parentProperty !== undefined
          ? parseInt(parentProperty, 10)
          : parentProperty;
      return formatValidationConstraints(error, index ? +index : null);
    }
  });
};

const logAndCaptureError = ({
  errorCode,
  errId,
  error,
  formattedError,
}: ResultError): void => {
  Logger.error({
    errorCode,
    errId,
    error,
    formattedError,
  });
  // apm.captureError(errorCode, {
  //   custom: {
  //     errId,
  //     formattedError,
  //     error,
  //   },
  // });
};

export const formatError = (error: GraphQLError): GraphQLFormattedError => {
  const errId = v4();
  if (!error.originalError) {
    logAndCaptureError({ errId, error, errorCode: INTERNAL_SERVER_ERROR });
    return new GraphQLError(`Internal Error: ${errId}`);
  }

  const originalMessage = error.originalError.message;
  const errorCode = error.extensions?.code;
  // if we forgot to provide required input or output fields
  if (error.name === 'ValidationError') {
    const formattedError = {
      extensions: {
        code: errorCode,
        status: 422,
      },
      message: originalMessage,
    };
    logAndCaptureError({ errId, formattedError, error, errorCode });
    return formattedError;
  }

  if (error.originalError instanceof ApolloError) {
    const { path, message } = error;
    const formattedError = {
      path,
      extensions: {
        code: errorCode,
      },
      message: message,
    };
    logAndCaptureError({ errId, formattedError, error, errorCode });
    return formattedError;
  }

  if (error.originalError instanceof BadRequestException) {
    const { path } = error;
    const {
      response: { message: validationErrors },
    } = error?.extensions?.exception;
    if (validationErrors && validationErrors.length > 0) {
      const baseError = {
        path,
        extensions: {
          code: BAD_USER_INPUT,
          statusCode: 422,
        },
        message: {},
      };
      const formattedError = validationErrors.reduce(
        (newValidationError: any, item: ValidationError) => {
          if (item?.children && item.children.length > 0) {
            newValidationError.message[item.property] =
              getNestedValidationsError(item.children, item.property);
            return newValidationError;
          }
          newValidationError.message[item.property] =
            formatValidationConstraints(item);
          return newValidationError;
        },
        baseError,
      );
      logAndCaptureError({
        errId,
        formattedError,
        error,
        errorCode: BAD_USER_INPUT,
      });
      return formattedError;
    }
  }

  if (
    error.originalError instanceof ForbiddenException ||
    error.originalError instanceof UnauthorizedException
  ) {
    const { path } = error;
    const {
      error: nestError,
      message,
      statusCode,
    } = error.originalError.getResponse() as any;
    const formattedError = {
      path,
      extensions: {
        code: nestError.toUpperCase(),
        statusCode,
      },
      message,
    };
    logAndCaptureError({
      errorCode: nestError.toUpperCase(),
      errId,
      error,
      formattedError,
    });
    return formattedError;
  }

  if (error.originalError instanceof TooManyRequestsException) {
    const { path } = error;
    const {
      code,
      error: message,
      statusCode,
    } = error.originalError.getResponse() as any;
    const formattedError = {
      path,
      extensions: {
        code,
        statusCode,
      },
      message,
    };
    logAndCaptureError({ errId, errorCode: code, formattedError, error });
    return formattedError;
  }

  logAndCaptureError({ errId, error, errorCode: INTERNAL_SERVER_ERROR });
  return new GraphQLError(`Internal Error: ${errId}`);
};
