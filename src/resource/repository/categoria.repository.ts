import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from '../entity/categoria.entity';

@Injectable()
export class CategoriaRepository {
  constructor(
    @InjectRepository(Categoria)
    private repository: Repository<Categoria>,
  ) {}

  // Criar uma nova categoria
  async create(categoria: Categoria): Promise<Categoria> {
    return this.repository.save(categoria);
  }

  // Atualizar uma categoria existente por ID
  async update(id: number, categoria: Partial<Categoria>): Promise<Categoria> {
    await this.repository.update(id, categoria);
    return this.repository.findOneBy({ id_categoria: id });
  }

  // Selecionar todas as categorias
  async selectAll(): Promise<Categoria[]> {
    return this.repository.find();
  }

  // Selecionar uma categoria por ID
  async selectById(id: number): Promise<Categoria> {
    return this.repository.findOneBy({ id_categoria: id });
  }

  // Deletar uma categoria por ID
  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
