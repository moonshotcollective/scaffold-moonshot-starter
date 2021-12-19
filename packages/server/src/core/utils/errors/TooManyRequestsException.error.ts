import { HttpStatus, HttpException } from '@nestjs/common';

export class TooManyRequestsException extends HttpException {
  constructor(message: string) {
    super(
      {
        error: message,
        code: 'TOO_MANY_REQUESTS',
        statusCode: HttpStatus.TOO_MANY_REQUESTS,
      },
      HttpStatus.TOO_MANY_REQUESTS,
    );
  }
}
