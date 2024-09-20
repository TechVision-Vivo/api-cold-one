/* eslint-disable prettier/prettier */
import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Plano } from './plano.entity';
import { Canais } from './canais.entity';

@Entity('plano_canais')
export class PlanoCanais {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Plano)
  @JoinColumn({ name: 'id_plano' })
  plano: Plano;

  @ManyToOne(() => Canais)
  @JoinColumn({ name: 'id_canal' })
  canal: Canais;
}
