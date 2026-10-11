import { Controller, Get, Post, Put,Delete, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { CategoriesService } from '../categories.services';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @Post()
    create(@Body() createCategoryDto: any) {
        return this.categoriesService.create(createCategoryDto);
    }

    @Get()
    FindAll() {
        return this.categoriesService.findAll();
    }

    @Get(':id')
    FindOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.categoriesService.findOne(id)
    }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe ) id: string) {
        return this.categoriesService.remove(id) 
    }
}