import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getList(): string[] {
    return this.appService.getList();
  }

  @Get()
  getObjList(): object[] {
    return this.appService.getList2();
  }
}
