import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { IsString, IsDefined, IsNotEmpty } from 'class-validator';

export enum SignatureType {
  /**EIP-191 signature scheme */
  PERSONAL_SIGNATURE = 'Personal signature',
}

registerEnumType(SignatureType, {
  name: 'SignatureType',
  description: 'EIP-191 signature scheme',
});

@InputType()
export class SiweMessageInput {
  /**RFC 4501 dns authority that is requesting the signing. */
  @Field()
  @IsString({ message: 'wrong.type' })
  @IsDefined({ message: 'not.defined' })
  @IsNotEmpty({ message: 'not.empty' })
  domain: string;

  /**Ethereum address performing the signing conformant to capitalization
   * encoded checksum specified in EIP-55 where applicable. */
  @Field()
  @IsString({ message: 'wrong.type' })
  @IsDefined({ message: 'not.defined' })
  @IsNotEmpty({ message: 'not.empty' })
  address: string;

  /**Human-readable ASCII assertion that the user will sign, and it must not
   * contain `\n`. */
  @Field()
  statement?: string;

  /**RFC 3986 URI referring to the resource that is the subject of the signing
   *  (as in the __subject__ of a claim). */
  @Field()
  @IsString({ message: 'wrong.type' })
  @IsDefined({ message: 'not.defined' })
  @IsNotEmpty({ message: 'not.empty' })
  uri: string;

  /**Current version of the message. */
  @Field()
  @IsString({ message: 'wrong.type' })
  @IsDefined({ message: 'not.defined' })
  @IsNotEmpty({ message: 'not.empty' })
  version: string;

  /**EIP-155 Chain ID to which the session is bound, and the network where
   * Contract Accounts must be resolved. */
  @Field()
  @IsString({ message: 'wrong.type' })
  @IsDefined({ message: 'not.defined' })
  @IsNotEmpty({ message: 'not.empty' })
  chainId: string;

  /**Randomized token used to prevent replay attacks, at least 8 alphanumeric
   * characters. */
  @Field()
  @IsString({ message: 'wrong.type' })
  @IsDefined({ message: 'not.defined' })
  @IsNotEmpty({ message: 'not.empty' })
  nonce: string;

  /**ISO 8601 datetime string of the current time. */
  @Field()
  @IsString({ message: 'wrong.type' })
  @IsDefined({ message: 'not.defined' })
  @IsNotEmpty({ message: 'not.empty' })
  issuedAt: string;

  /**ISO 8601 datetime string that, if present, indicates when the signed
   * authentication message is no longer valid. */
  @Field({ nullable: true })
  expirationTime?: string;

  /**ISO 8601 datetime string that, if present, indicates when the signed
   * authentication message will become valid. */
  @Field({ nullable: true })
  notBefore?: string;

  /**System-specific identifier that may be used to uniquely refer to the
   * sign-in request. */
  @Field({ nullable: true })
  requestId?: string;

  /**List of information or references to information the user wishes to have
   * resolved as part of authentication by the relying party. They are
   * expressed as RFC 3986 URIs separated by `\n- `. */
  @Field(() => [String], { nullable: true })
  resources?: Array<string>;

  /**Signature of the message signed by the wallet. */
  @Field()
  signature?: string;

  /**Type of sign message to be generated. */
  @Field(() => SignatureType)
  type?: SignatureType;
}
