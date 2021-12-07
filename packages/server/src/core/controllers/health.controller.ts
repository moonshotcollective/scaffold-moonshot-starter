import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';
import { CERAMIC_TESTNET_NODE_URL } from '../../services/ceramic/data-models';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck('google', 'https://google.com'),
      () =>
        this.http.pingCheck(
          'ceramic-gateway',
          CERAMIC_TESTNET_NODE_URL + '/api/v0/node/healthcheck',
        ),
    ]);
  }
}
