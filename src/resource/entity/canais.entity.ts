/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Categoria } from './categoria.entity';

@Entity('canais')
export class Canais {
  @PrimaryGeneratedColumn()
  id_canal: number;

  @Column() 
  numero: number;

  @Column()
  nome: string;

  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'id_categoria' })
  categoria: Categoria;
}
