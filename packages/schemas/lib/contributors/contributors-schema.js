"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContributorsSchema = void 0;
exports.ContributorsSchema = {
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
//# sourceMappingURL=contributors-schema.js.map