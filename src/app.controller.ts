import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('list')
  getList(): string[] {
    return this.appService.getList();
  }

  @Get('objlist')
  getObjList(): object[] {
    return this.appService.getList2();
  }
}
