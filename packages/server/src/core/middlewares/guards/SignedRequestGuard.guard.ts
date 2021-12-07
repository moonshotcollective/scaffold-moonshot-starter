import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';
import crypto from 'crypto';
import config from '../../configs/config';

@Injectable()
export class SignedRequestGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const {
      api: { apiKey },
    } = config();
    const { headers, body } = request;
    const hmacHeader = headers['x-signed-request-hmac'];

    if (!hmacHeader) {
      return false;
    }

    const hmac = crypto
      .createHmac('sha256', apiKey)
      .update(Buffer.from(JSON.stringify(body)))
      .digest('base64');

    if (hmac !== hmacHeader) {
      return false;
    }
    return true;
  }
}
