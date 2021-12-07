import { Controller, Get } from '@nestjs/common';

// Root controller
@Controller()
export class AppController {
  @Get('/hello')
  getHello(): string {
    return 'Hello';
  }
}
