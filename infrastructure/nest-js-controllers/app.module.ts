import { Module } from '@nestjs/common';
import { SingleUseKeyController } from './singleUseKey.controller';

@Module({
  controllers: [SingleUseKeyController],
})
export class appModule {}
