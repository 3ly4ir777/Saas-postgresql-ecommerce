import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoriesController } from './controller/categories.controller';
import { CategoriesService } from './categories.services'
import { Category } from './entities/category.entity'


@Module({
    imports:[TypeOrmModule.forFeature([Category])],
    controllers: [CategoriesController],
    providers: [CategoriesService]
})
export class CategoriesModule {}
