import crypto from 'crypto';
export const generateHmac = (secret: string, rawBody: string) =>
  crypto
    .createHmac('sha256', secret)
    .update(Buffer.from(rawBody))
    .digest('base64');
