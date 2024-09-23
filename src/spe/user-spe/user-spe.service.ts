import { Injectable } from '@nestjs/common';
import { CreateUserSpeDto } from './dto/create-user-spe.dto';
import { UpdateUserSpeDto } from './dto/update-user-spe.dto';
import { UserRepository } from 'src/resource/repository/user.repository';

@Injectable()
export class UserSpeService {
  constructor(private userRepository: UserRepository) {}

  // Método para criar um novo usuário
  async create(createUserSpeDto: CreateUserSpeDto) {
    const newUser = this.userRepository.create(createUserSpeDto);
    return newUser;
  }

  // Método para retornar todos os usuários
  async findAll() {
    const allUsers = await this.userRepository.selectAll();
    return allUsers;
  }

  // Método para retornar um único usuário por ID
  async findOne(id: number) {
    const user = await this.userRepository.selectById(id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  async findOneEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error(`User with email ${email} not found`);
    }
    return user;
  }

  // Método para atualizar um usuário existente por ID
  async update(id: number, updateUserSpeDto: UpdateUserSpeDto) {
    const updatedUser = await this.userRepository.update(id, updateUserSpeDto);
    return updatedUser;
  }

  // Método para remover um usuário por ID
  async remove(id: number) {
    await this.userRepository.delete(id);
    return `User with id ${id} removed successfully`;
  }
}
