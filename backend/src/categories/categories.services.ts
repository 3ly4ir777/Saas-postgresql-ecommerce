import {
    Injectable,
    NotFoundException,
    BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';


@Injectable()
export class CategoriesService {
    constructor (
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ){}

    async create(createCategoryDto: any) {
       const existingCategory = await this.categoryRepository.findOne({ 
            where: { name: createCategoryDto.name } 
            });
        if (existingCategory) throw new BadRequestException('La categoria ya existe');

        const category = this.categoryRepository.create(createCategoryDto);
        return await this.categoryRepository.save(category);
    }

    //obtener todas las categorias
    async findAll() {
        return await this.categoryRepository.find();
    }

    //obtener una categoria por id
    async findOne(id: string) {
        const category = await this.categoryRepository.findOneBy({ id });
        if (!category) throw new NotFoundException('Categoria no encontrada');
        return category;
    } 

    // eliminar una categoria por id
    async remove(id: string) {
        const category = await this.findOne(id);
        return await this.categoryRepository.remove(category);
    }


}