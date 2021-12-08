import { Resolver, Query } from '@nestjs/graphql';
import { Contributor } from '../Contributor.entity';

@Resolver(() => [Contributor])
export class GetAllContributorsResolver {
  @Query(() => [Contributor], {
    nullable: true,
    description: 'Gets all the contributors',
    name: 'getAllContributors',
  })
  async getAllContributors(): Promise<Contributor[] | null | undefined> {
    // Get the data from your favorite data store
    return [
      {
        did: 'did:3:some_did',
        githubUsername: 'some_Github_username',
      },
      {
        did: 'did:3:some_other_did',
        githubUsername: 'some_other_Github_username',
      },
    ];
  }
}
