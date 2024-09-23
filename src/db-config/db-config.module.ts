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
        type: "postgres",
        ssl: {
          rejectUnauthorized: false, // Para aceitar certificados não verificados
        },
        url: "postgresql://vivo_fiap_user:bm904STL29XNp6fGqf8yLTL5XVAwnQpp@dpg-croaqti3esus73bvqp9g-a.oregon-postgres.render.com/vivo_fiap",
        synchronize: false,
        logging: true,
        entities: [],
      }),
    }),
  ],
})
export class DbConfigModule {}