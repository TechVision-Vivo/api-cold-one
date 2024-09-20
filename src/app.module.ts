import { Module } from '@nestjs/common';
import { DbConfigModule } from './db-config/db-config.module';
import { SpeModule } from './spe/spe.module';

@Module({
  imports: [DbConfigModule, SpeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
