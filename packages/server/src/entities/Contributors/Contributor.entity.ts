import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../../core/entities/BaseEntity';

@ObjectType()
export class Contributor extends BaseEntity {
  @Field()
  did: string;

  @Field()
  githubUsername: string;
}
