/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Plano } from './entity/plano.entity';
import { Canais } from './entity/canais.entity';
import { PlanoCanais } from './entity/plano-canais.entity';
import { Categoria } from './entity/categoria.entity';
import { UserRepository } from './repository/user.repository';
import { PlanoRepository } from './repository/plano.repository';
import { CategoriaRepository } from './repository/categoria.repository';
import { CanaisRepository } from './repository/canais.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, Plano, Canais, PlanoCanais, Categoria])],
  providers: [UserRepository, PlanoRepository, CategoriaRepository, CanaisRepository],
  exports: [UserRepository, PlanoRepository, CategoriaRepository, CanaisRepository]
})
export class ResourceModule {}
