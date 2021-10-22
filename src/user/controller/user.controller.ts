import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  findall(): string {
    return 'All user retur';
  }
}
