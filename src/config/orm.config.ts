import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  autoLoadEntities: true,
  synchronize: false,
  migrationsRun: true,
  logging: true,
  entities: [__dirname + '/**/*.entity.ts'],
  migrations: [__dirname + '/migrations/**/*.ts'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default ormConfig;
