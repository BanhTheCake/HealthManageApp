import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  User,
  DailyIntake,
  GoalTracking,
  Meal,
  MealItem,
  Ingredient,
  RecipeItems,
  Recipes,
  MoodRecommendItems,
  Moods,
} from 'src/database/entities';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'health',
      logging: true,
      entities: [
        User,
        Meal,
        MealItem,
        GoalTracking,
        DailyIntake,
        Ingredient,
        RecipeItems,
        Recipes,
        MoodRecommendItems,
        Moods,
      ],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
