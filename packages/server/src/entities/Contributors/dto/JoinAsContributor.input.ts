import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsDefined, IsNotEmpty } from 'class-validator';

@InputType()
export class JoinAsContributorInput {
  @Field()
  @IsString({ message: 'wrong.type' })
  @IsDefined({ message: 'not.defined' })
  @IsNotEmpty({ message: 'not.empty' })
  did: string;

  @Field()
  @IsString({ message: 'wrong.type' })
  @IsDefined({ message: 'not.defined' })
  @IsNotEmpty({ message: 'not.empty' })
  githubUsername: string;
}
