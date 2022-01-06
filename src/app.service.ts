import { Injectable } from '@nestjs/common';

const list = ["banana", "apple", "melon"]

const objList = [{name: "pedro", email: "pedro@pedro.com", age: 24

}]


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getList(): string[] {
    return list;
  }

  getList2(): object[] {
    return objList;
  }
}
