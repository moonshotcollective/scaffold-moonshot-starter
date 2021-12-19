import {
  ApolloServerPlugin,
  GraphQLServiceContext,
} from 'apollo-server-plugin-base';
import { GraphQLSchema, separateOperations } from 'graphql';
import {
  fieldExtensionsEstimator,
  getComplexity,
  simpleEstimator,
} from 'graphql-query-complexity';
import { Logger, PayloadTooLargeException } from '@nestjs/common';

export class ApolloComplexityPlugin implements ApolloServerPlugin {
  private schema: GraphQLSchema;

  constructor(private maxComplexity: number) {}

  public async serverWillStart(service: GraphQLServiceContext) {
    this.schema = service.schema;
  }

  public requestDidStart() {
    return {
      didResolveOperation: async ({ request, document }: any) => {
        /**
         * This provides GraphQL query analysis to be able to react
         * on complex queries to your GraphQL server.
         * This can be used to protect your GraphQL servers against
         * resource exhaustion and DoS attacks.
         * More documentation can be found at
         * https://github.com/ivome/graphql-query-complexity.
         */
        const complexity = getComplexity({
          schema: this.schema,
          // To calculate query complexity properly,
          // we have to check if the document contains multiple operations
          // and eventually extract it operation from
          // the whole query document.
          query: request.operationName
            ? separateOperations(document)[request.operationName]
            : document,
          // The variables for our GraphQL query
          variables: request.variables,
          // Add any number of estimators.
          // The estimators are invoked in order, the first
          // numeric value that is being returned by
          // an estimator is used as the field complexity.
          // If no estimator returns a value, an exception is raised.
          estimators: [
            // Using fieldExtensionsEstimator is mandatory
            // to make it work with type-graphql.
            fieldExtensionsEstimator(),
            // Add more estimators here...
            // This will assign each field a complexity of 1
            // if no other estimator returned a value.
            simpleEstimator({ defaultComplexity: 1 }),
          ],
        });
        // Here we can react to the calculated complexity,
        // like compare it with max and throw error when
        // the threshold is reached.
        if (complexity >= this.maxComplexity) {
          throw new PayloadTooLargeException(
            `Too complicated query (complexity: ${complexity}, max complexity: ${this.maxComplexity})`,
          );
        }
        complexity > 0 &&
          Logger.warn(`Used query complexity points: ${complexity}`);
      },
    };
  }
}
