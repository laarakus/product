import { Controller, Post, Body, Get } from '@nestjs/common';
import { SingleUseKeyRepository } from '../../infrastructure/inmemory-repositories';
import { RegisterKeyAsSingleUse } from '../../domain/api';

export class SingleUseKeyDto {
  key: string;
}

@Controller('single-use-key')
export class SingleUseKeyController {
  @Post()
  registerKeyAsSingleUse(@Body() singleUseKeyDto: SingleUseKeyDto) {
    return new RegisterKeyAsSingleUse({
      singleUseKeyRepository: new SingleUseKeyRepository(),
    }).execute(singleUseKeyDto);
  }
  @Get()
  helloWorld() {
    return 'hello-world';
  }
}
