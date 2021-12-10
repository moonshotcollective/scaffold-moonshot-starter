import { Module } from '@nestjs/common';

import { RedisModule } from '../../core/resources/Redis/Redis.module';
import { SignInResolver } from './mutations/SignIn.resolver';
import { SignOutResolver } from './mutations/SignOut.resolver';
import { GetNonceResolver } from './queries/GetNonce.resolver';
import { MeResolver } from './queries/Me.resolver';

@Module({
  imports: [RedisModule],
  providers: [SignInResolver, SignOutResolver, GetNonceResolver, MeResolver],
  exports: [],
})
export class UserModule {}
