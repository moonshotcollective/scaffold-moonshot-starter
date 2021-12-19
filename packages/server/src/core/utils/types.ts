import { Request, Response } from 'express';
import { ExecutionParams } from 'subscriptions-transport-ws';
import { SiweMessage } from '../libs/siwe/client';

export interface Context {
  req: {
    session: {
      siwe: SiweMessage | null;
      nonce: string | null;
      ens?: string | null;
    };
  } & Request;
  res: Response;
  connection: ExecutionParams;
}

export interface RateLimitOptionsType {
  max: number;
  windowMs: number;
  limitByVariables: boolean;
  errorMessage: string;
}
