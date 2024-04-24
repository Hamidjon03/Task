import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { CourseModule } from './modules/course/course.module';
import { FileModule } from './modules/file/file.module';

@Module({
  imports: [UsersModule, CourseModule, FileModule],
  controllers: [],
  providers: [],
})
export class ServicesModule {}
