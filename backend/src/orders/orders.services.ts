import {Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Entity, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from './entities/orders.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
    export class OrdersService {
        constructor(
            @InjectRepository(Orders)
            private readonly ordersRepository: Repository<Orders>,
        ) {}

        async create(createOrdersDto: CreateOrderDto) {
        const existingOrder = await this.ordersRepository.findOne({ where: {orderNumber: createOrdersDto.orderNumber}});
        if (existingOrder) throw new BadRequestException('la orden ya existe');

        const order = this.ordersRepository.create(createOrdersDto);
        return await this.ordersRepository.save(order);
    }

    //obtener todos los ordenes
    async findAll() {
        return await this.ordersRepository.find();
    }

    //obtener una orden por id
    async findOne(id: string) {
        const order = await this.ordersRepository.findOneBy({ id });
        if (!order) throw new NotFoundException('Orden no encontrada');
        return order;
    } 

    // eliminar una orden por id
    async remove(id: string) {
        const order = await this.findOne(id);
        return await this.ordersRepository.remove(order);
    }


}