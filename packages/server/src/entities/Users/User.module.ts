import { Module } from '@nestjs/common';

import { RedisModule } from '../../core/resources/Redis/Redis.module';
import { RegisterResolver } from './mutations/Register.resolver';
import { GetNonceResolver } from './queries/GetNonce.resolver';
import { MeResolver } from './queries/Me.resolver';

@Module({
  imports: [RedisModule],
  providers: [RegisterResolver, GetNonceResolver, MeResolver],
  exports: [],
})
export class UserModule {}
