import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvVars } from 'src/types/env';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      useFactory: (configService: ConfigService<EnvVars>) => {
        console.log('db name', configService.get('DB_NAME'));

        return {
          type: 'postgres',
          host: configService.get('HOST'),
          port: configService.get('PORT'),
          username: configService.get('USERNAME'),
          password: configService.get('PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: [__dirname + '/entities/**/*.entity.ts'],
          migrations: [__dirname + '/migrations/**/*.ts'],
          migrationsTableName: 'migrations_list',
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
