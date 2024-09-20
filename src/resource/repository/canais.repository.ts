import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Canais } from '../entity/canais.entity';

@Injectable()
export class CanaisRepository {
  constructor(
    @InjectRepository(Canais)
    private repository: Repository<Canais>,
  ) {}

  // Criar um novo canal
  async create(canal: Canais): Promise<Canais> {
    return this.repository.save(canal);
  }

  // Atualizar um canal existente por ID
  async update(id: number, canal: Partial<Canais>): Promise<Canais> {
    await this.repository.update(id, canal);
    return this.repository.findOneBy({ id_canal: id });
  }

  // Selecionar todos os canais
  async selectAll(): Promise<Canais[]> {
    return this.repository.find();
  }

  // Selecionar um canal por ID
  async selectById(id: number): Promise<Canais> {
    return this.repository.findOneBy({ id_canal: id });
  }

  // Deletar um canal por ID
  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
