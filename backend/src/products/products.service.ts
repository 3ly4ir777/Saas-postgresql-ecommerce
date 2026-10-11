import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateProductDto } from "./dto/create-product";
import { UpdateProductDto } from "./dto/update-product";
import { Product } from "./entities/product.entity";



@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) {}
async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto);
    return await this.productRepository.save(product);
}

//Listar todos los productos
findAll() {
    return this.productRepository.find();
}

// Buscar uno solo por ID 
async findOne(id: number): Promise<Product> {
    const product =  await this.productRepository.findOneBy({ id });
    if (!product) {
        throw new NotFoundException(`Producto #${id} no encontrado`);
    }
    return product;
}

//Actualizar un producto por ID
async update(id: number, updateProductDto: UpdateProductDto){
    const product = await this.productRepository.preload({
        id: id,
        ...updateProductDto,
    });
    if (!product) {
        throw new NotFoundException(`Producto #${id} no encontrado`);
    }
    return this.productRepository.save(product);
}

//Eliminar un producto por ID
async remove(id: number){
    const product = await this.findOne(id);
    return this.productRepository.remove(product);
}

}