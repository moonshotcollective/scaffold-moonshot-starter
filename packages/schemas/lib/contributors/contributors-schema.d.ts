export declare const ContributorsSchema: {
    $schema: string;
    title: string;
    type: string;
    items: {
        type: string;
        title: string;
        properties: {
            id: {
                $ref: string;
            };
        };
    };
    definitions: {
        CeramicStreamId: {
            type: string;
            pattern: string;
            maxLength: number;
        };
    };
};
