import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServicesModule } from './services/services.module';
import { JobsModule } from './jobs/jobs.module';
import { UserModule } from './user/user.module';
import { PostulationsModule } from './postulations/postulations.module';
import typeOrmConfig from './config/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    CategoryModule,
    ServicesModule,
    JobsModule,
    UserModule,
    PostulationsModule,
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '1h' },
      secret: process.env.JWT_SECRET,
    }),
    AuthModule,
    SubscriptionsModule.forRootAsync(),
  ],
})
export class AppModule {}
