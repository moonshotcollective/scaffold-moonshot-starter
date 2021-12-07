import { CeramicClient } from '@ceramicnetwork/http-client';
import { DID } from 'dids';
import { Ed25519Provider } from 'key-did-provider-ed25519';
import { getResolver } from 'key-did-resolver';
import { fromString, toString } from 'uint8arrays';
import { randomBytes } from '@stablelib/random';
// The key must be provided as an environment variable
import { DataModel } from '@glazed/datamodel';
import { DIDDataStore } from '@glazed/did-datastore';
import { Core } from '@self.id/core';

import publishedModel from '@scaffold-eth/schemas/lib/model.json';
// import Box from '3box';
// import { legacy3BoxToCeramic } from './legacy3BoxToCeramic';

export const CERAMIC_TESTNET = 'testnet-clay';
export const CERAMIC_TESTNET_NODE_URL = 'https://ceramic-clay.3boxlabs.com';
export const CERAMIC_MAINNET_NODE_URL = 'https://gateway.ceramic.network';
export const CERAMIC_LOCAL_NODE_URL = 'http://localhost:7007';

// READ ONLY CLIENT
export const ceramicCoreFactory = () => {
  // connect to a known URL
  // const core = new Core({ ceramic: "http://localhost:7007" });
  // or use one of the preconfigured option
  const core = new Core({
    ceramic: CERAMIC_TESTNET,
    model: publishedModel,
  });
  return core;
};

// DATA MODEL CLIENT
export const ceramicDataModelFactory = async () => {
  if (!process.env.DID_KEY) {
    console.warn('DID_KEY not found in .env, generating a new seed..');
    const newSeed = toString(randomBytes(32), 'base16');
    console.log(`Seed generated. Save this in your .env as DID_KEY=${newSeed}`);
    process.env.DID_KEY = newSeed;
  }
  const key = fromString(process.env.DID_KEY, 'base16');
  // Create and authenticate the DID
  const did = new DID({
    provider: new Ed25519Provider(key),
    resolver: getResolver(),
  });
  await did.authenticate();

  // Connect to the testnet local Ceramic node
  const ceramic = new CeramicClient(CERAMIC_TESTNET_NODE_URL) as any;
  ceramic.did = did;
  const model = new DataModel({ ceramic, model: publishedModel });
  const dataStore = new DIDDataStore({ ceramic, model });
  return { dataStore, model, ceramic };
};
