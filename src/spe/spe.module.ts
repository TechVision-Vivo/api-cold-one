import { Module } from '@nestjs/common';
import { UserSpeModule } from './user-spe/user-spe.module';

@Module({
  imports: [UserSpeModule],
})
export class SpeModule {}
