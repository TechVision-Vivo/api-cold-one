/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Plano } from './plano.entity';

@Entity('BF_UM_USER')
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column()
  email: string;

  @Column()
  nome: string;

  @Column()
  idade: number;

  @Column()
  cpf: string;

  @Column()
  endereco: string;

  @Column()
  telefone: string;
  
  @Column()
  id_plano: number;

  @ManyToOne(() => Plano)
  @JoinColumn({ name: 'id_plano' })
  plano: Plano;
}
