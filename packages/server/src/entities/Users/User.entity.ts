import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../../core/entities/BaseEntity';

@ObjectType()
export class User extends BaseEntity {
  @Field()
  address: string;
  @Field({ nullable: true })
  ens?: string;
}
