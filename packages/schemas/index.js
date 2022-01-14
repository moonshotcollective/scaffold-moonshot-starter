require("dotenv").config();
const { promises } = require("fs");
const { ModelManager } = require("@glazed/devtools");
const { CeramicClient } = require("@ceramicnetwork/http-client");
const { DID } = require("dids");
const { Ed25519Provider } = require("key-did-provider-ed25519");
const { getResolver } = require("key-did-resolver");
const { fromString } = require("uint8arrays");
const basicProfile = require("@datamodels/identity-profile-basic");
const cryptoAccounts = require("@datamodels/identity-accounts-crypto");
const webAccounts = require("@datamodels/identity-accounts-web");
const { schemas } = require("./lib/schemas");

const { writeFile } = promises;
// The key must be provided as an environment variable
const createModels = async () => {
  const key = fromString(process.env.DID_KEY || "", "base16");
  // Create and authenticate the DID
  const did = new DID({
    provider: new Ed25519Provider(key),
    resolver: getResolver(),
  });
  await did.authenticate();

  // Connect to the testnet local Ceramic node
  const ceramic = new CeramicClient(
    process.env.CERAMIC_URL || "https://ceramic-clay.3boxlabs.com"
  ); // If you're running a local node you can use "http://localhost:7007"
  ceramic.did = did;

  // Create a manager for the model
  const manager = new ModelManager(ceramic);

  manager.addJSONModel(basicProfile.model);
  manager.addJSONModel(cryptoAccounts.model);
  manager.addJSONModel(webAccounts.model);
  for (const [schemaName, schema] of Object.entries(schemas.dapp)) {
    const createdSchemaID = await manager.createSchema(schemaName, schema);
    // Create the definition using the created schema ID
    if (createdSchemaID) {
      const schemaURL = manager.getSchemaURL(createdSchemaID);
      if (!schemaURL) {
        throw new Error("Error - manager.getSchemaURL");
      }
      const definition = await manager.createDefinition(
        schemaName.toLowerCase(),
        {
          name: schemaName.toLowerCase(),
          description: `Schema definition for ${schemaName}.`,
          schema: schemaURL,
        }
      );
      console.log({ definition });
    }
  }
  // Publish model to Ceramic node
  const model = await manager.toPublished();

  // Write published model to JSON file
  await writeFile("./lib/model.json", JSON.stringify(model));
  return { model, manager, ceramic };
};
(async () => {
  await createModels();
})();
