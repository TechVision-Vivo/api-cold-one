/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity('plano')
export class Plano {
  @PrimaryGeneratedColumn()
  id_plano: number;

  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  @Column()
  numero_pontos: number;

  @Column()
  data_vencimento: Date;

  @Column()
  nome: string;

  @Column()
  tempo_contrato: number;

  @OneToMany(() => User, (user) => user.plano)
  users: User[];
}