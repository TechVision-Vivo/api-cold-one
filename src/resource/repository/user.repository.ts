import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { Canais } from '../entity/canais.entity';
import { CreateUserSpeDto } from 'src/spe/user-spe/dto/create-user-spe.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async create(user: CreateUserSpeDto): Promise<User> {
    return this.repository.save(user);
  }

  // Método para atualizar um usuário existente por ID
  async update(id: number, user: Partial<User>): Promise<User> {
    await this.repository.update(id, user);
    return this.repository.findOneBy({ id_user: id });
  }

  // Método para selecionar todos os usuários
  async selectAll(): Promise<User[]> {
    return this.repository.find();
  }

  // Método para buscar todos os canais de um usuário
  async findAllCanaisByUserId(userId: number): Promise<Canais[] | any> {
    return this.repository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.plano', 'plano') // Junta a tabela Plano
      .leftJoinAndSelect('plano.planoCanais', 'planoCanais') // Junta a tabela Plano_canais
      .leftJoinAndSelect('planoCanais.canais', 'canais') // Junta a tabela Canais
      .where('user.id_user = :userId', { userId })
      .select([
        'canais.id',
        'canais.nome',
        'canais.numero',
        'canais.id_categoria',
      ])
      .getMany();
  }

  // Método para selecionar um usuário por ID
  async selectById(id: number): Promise<User> {
    return this.repository.findOneBy({ id_user: id });
  }

  // Método para deletar um usuário por ID
  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  // Método para encontrar usuários por idade
  async findByAge(age: number): Promise<User[]> {
    return this.repository.find({ where: { idade: age } });
  }

  // Método para encontrar usuários por plano
  async findByPlan(planId: number): Promise<User[]> {
    return this.repository.find({ where: { id_plano: planId } });
  }

  async findByEmail(email: string): Promise<User[]> {
    return this.repository.find({ where: { email : email } });
  }
}
