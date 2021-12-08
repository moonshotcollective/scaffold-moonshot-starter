import { Request, Response } from 'express';
import { ExecutionParams } from 'subscriptions-transport-ws';

export interface Context {
  req: {
    session: any;
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
