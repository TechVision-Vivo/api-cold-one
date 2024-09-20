import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserSpeService } from './user-spe.service';
import { CreateUserSpeDto } from './dto/create-user-spe.dto';
import { UpdateUserSpeDto } from './dto/update-user-spe.dto';

@Controller('user-spe')
export class UserSpeController {
  constructor(private readonly userSpeService: UserSpeService) {}

  @Post()
  create(@Body() createUserSpeDto: CreateUserSpeDto) {
    return this.userSpeService.create(createUserSpeDto);
  }

  @Get()
  findAll() {
    return this.userSpeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userSpeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserSpeDto: UpdateUserSpeDto) {
    return this.userSpeService.update(+id, updateUserSpeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userSpeService.remove(+id);
  }
}
