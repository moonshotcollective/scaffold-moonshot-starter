import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { RedisModule } from '../../core/resources/Redis/Redis.module';

import { JoinAsContributorResolver } from './mutations/JoinAsContributor.resolver';
import { GetAllContributorsResolver } from './queries/GetAllContributors.resolver';

@Module({
  imports: [
    RedisModule,
    HttpModule.register({
      timeout: 60000,
      maxRedirects: 10,
    }),
  ],
  providers: [JoinAsContributorResolver, GetAllContributorsResolver],
  exports: [],
})
export class ContributorModule {}
