import { Module } from '@nestjs/common';
import { PostulationsService } from './postulations.service';
import { PostulationsController } from './postulations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postulation } from './entities/postulation.entity';
import { Job } from 'src/jobs/entities/job.entity';
import { User } from 'src/user/entities/User.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Postulation, Job, User])],
  controllers: [PostulationsController],
  providers: [PostulationsService],
})
export class PostulationsModule {}
