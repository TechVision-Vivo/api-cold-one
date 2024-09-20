import { PartialType } from '@nestjs/mapped-types';
import { CreateUserSpeDto } from './create-user-spe.dto';

export class UpdateUserSpeDto extends PartialType(CreateUserSpeDto) {}
