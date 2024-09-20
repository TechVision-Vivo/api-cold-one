import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plano } from '../entity/plano.entity';

@Injectable()
export class PlanoRepository {
  constructor(
    @InjectRepository(Plano)
    private repository: Repository<Plano>,
  ) {}

  // Criar um novo plano
  async create(plano: Plano): Promise<Plano> {
    return this.repository.save(plano);
  }

  // Atualizar um plano existente por ID
  async update(id: number, plano: Partial<Plano>): Promise<Plano> {
    await this.repository.update(id, plano);
    return this.repository.findOneBy({ id_plano: id });
  }

  // Selecionar todos os planos
  async selectAll(): Promise<Plano[]> {
    return this.repository.find();
  }

  // Selecionar um plano por ID
  async selectById(id: number): Promise<Plano> {
    return this.repository.findOneBy({ id_plano: id });
  }

  // Deletar um plano por ID
  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
