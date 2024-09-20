import { Module } from '@nestjs/common';
import { UserSpeService } from './user-spe.service';
import { UserSpeController } from './user-spe.controller';
import { ResourceModule } from 'src/resource/resource.module';

@Module({
  controllers: [UserSpeController],
  providers: [UserSpeService],
  imports: [ResourceModule],
})
export class UserSpeModule {}
