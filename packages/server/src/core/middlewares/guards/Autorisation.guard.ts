import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';

// import { UserService } from '../../../entities/User/User.service';

@Injectable()
export class AutorisationGuard implements CanActivate {
  // constructor() {}  private readonly userService: UserService, // private readonly reflector: Reflector,

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const currentUserId = request?.session?.userId;

    if (!currentUserId) {
      return false;
    }

    return true;
  }
}
