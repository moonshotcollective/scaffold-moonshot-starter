import { Field, InputType } from '@nestjs/graphql';
import { SiweMessageInput } from './SiweMessageInput';

@InputType()
export class SiweRegisterInput {
  @Field(() => SiweMessageInput)
  message: SiweMessageInput;

  @Field()
  ens?: string;
}
