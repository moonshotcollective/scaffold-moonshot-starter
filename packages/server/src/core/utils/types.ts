import { Request, Response } from 'express';
import { ExecutionParams } from 'subscriptions-transport-ws';
import CeramicClient from '@ceramicnetwork/http-client';
import { DIDDataStore } from '@glazed/did-datastore';
import { DataModel } from '@glazed/datamodel';
import { Core } from '@self.id/core';

export interface Ceramic {
  ceramic: CeramicClient;
  dataStore: DIDDataStore;
  model: DataModel<any, any>;
}
export interface Context {
  req: {
    session: any;
    ceramicClient: Ceramic;
    ceramicCore: Core;
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

export interface UseCeramicClient {
  ceramicCore: Core;
  ceramicClient: Ceramic;
}
