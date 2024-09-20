import * as dotenv from 'dotenv';
dotenv.config();

export class DbConfig {
  // Método para obter o host do banco de dados
  getHost(): string {
    return process.env.DB_HOST || null;
  }

  // Método para obter a porta do banco de dados
  getPort(): number {
    return Number(process.env.DB_PORT) || null; // 1521 é o padrão para Oracle
  }

  // Método para obter o nome de usuário do banco de dados
  getUserName(): string {
    return process.env.DB_USERNAME || null;
  }

  // Método para obter a senha do banco de dados
  getPassword(): string {
    return process.env.DB_PASSWORD || null;
  }

  // Método para obter o SID do banco de dados Oracle
  getSid(): string {
    return process.env.DB_SID || null;
  }
}
