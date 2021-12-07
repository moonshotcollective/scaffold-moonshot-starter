export const ContributorsSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "Contributors",
  type: "array",
  items: {
    type: "object",
    title: "ContributorItem",
    properties: {
      id: {
        $ref: "#/definitions/CeramicStreamId",
      },
    },
  },
  definitions: {
    CeramicStreamId: {
      type: "string",
      pattern: "^ceramic://.+(\\\\?version=.+)?",
      maxLength: 150,
    },
  },
};
