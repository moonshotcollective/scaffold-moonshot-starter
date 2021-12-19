import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Contributor } from '../Contributor.entity';
import { JoinAsContributorInput } from '../dto/JoinAsContributor.input';

export type ContributorItem = {
  id: string;
  did: string;
  githubUsername: string;
};

export type ContributorsList = { contributors: Array<ContributorItem> };
@Resolver(() => Contributor)
export class JoinAsContributorResolver {
  @Mutation(() => Contributor, {
    nullable: true,
    description: 'Join as a Contributor',
    name: 'joinAsContributor',
  })
  async joinAsContributor(
    @Args('input') { did, githubUsername }: JoinAsContributorInput,
  ): Promise<Contributor | null | undefined> {
    // TODO: Save the data on your favorite data store
    return {
      did: did,
      githubUsername: githubUsername,
    };
  }
}
