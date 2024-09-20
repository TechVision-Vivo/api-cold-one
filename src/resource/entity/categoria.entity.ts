/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Canais } from './canais.entity';

@Entity('categoria')
export class Categoria {
  @PrimaryGeneratedColumn()
  id_categoria: number;

  @Column()
  nome: string;

  @Column()
  limite_de_idade: number;

  @Column()
  descricao: string;

  @OneToMany(() => Canais, (canais) => canais.categoria)
  canais: Canais[];
}
