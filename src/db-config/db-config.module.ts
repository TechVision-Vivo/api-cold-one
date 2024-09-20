import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfig } from './db-config';
import { User } from 'src/resource/entity/user.entity';
import { Plano } from 'src/resource/entity/plano.entity';
import { Categoria } from 'src/resource/entity/categoria.entity';
import { PlanoCanais } from 'src/resource/entity/plano-canais.entity';
import { Canais } from 'src/resource/entity/canais.entity';

const dbConfig = new DbConfig();
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'oracle',
        host: dbConfig.getHost(),
        port: dbConfig.getPort(),
        username: dbConfig.getUserName(),
        password: dbConfig.getPassword(),
        sid: dbConfig.getSid(),
        synchronize: false,
        logging: true,
        entities: [User, Plano, Canais, PlanoCanais, Categoria],
      }),
    }),
  ],
})
export class DbConfigModule {}
