import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MocksModule } from './mocks/mocks.module';
import { UsersModule } from './users/users.module';
import { MealsModule } from './meals/meals.module';
@Module({
  imports: [DatabaseModule, MocksModule, UsersModule, MealsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
