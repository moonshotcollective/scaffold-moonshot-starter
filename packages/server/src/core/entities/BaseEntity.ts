import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export abstract class BaseEntity {
  @Field({
    description: 'Identifies the date and time when the object was created.',
  })
  createdAt?: string;
  @Field({
    description:
      'Identifies the date and time when the object was last updated.',
  })
  updatedAt?: string;
}
