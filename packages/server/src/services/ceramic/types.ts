import { CommitID } from '@ceramicnetwork/streamid';

export type CreateCeramicDocumentInput = {
  data: any;
  family?: string;
  schema?: string | CommitID;
};
