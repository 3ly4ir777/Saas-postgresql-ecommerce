import {Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Entity, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Payments } from './entities/payments.entity';
import { CreatePaymentsDto } from './dto/create-payments.dto';

@Injectable()
    export class PaymentsService {
        constructor(
            @InjectRepository(Payments)
            private readonly paymentsRepository: Repository<Payments>,
        ) {}

    async create(createPaymentsDto: CreatePaymentsDto) {

        if (createPaymentsDto.gatewayTransactionId){
            const existing = await this.paymentsRepository.findOne({
                where:{ gatewayTransactionId: createPaymentsDto.gatewayTransactionId}
            })
        
        if (existing) throw new BadRequestException('la orden ya existe');
        }

        const payment = this.paymentsRepository.create(createPaymentsDto);
        return await this.paymentsRepository.save(payment);
    }

    //obtener todos los ordenes
    async findAll() {
        return await this.paymentsRepository.find();
    }

    //obtener una orden por id
    async findOne(id: string) {
        const payments = await this.paymentsRepository.findOneBy({ id });
        if (!payments) throw new NotFoundException('Orden no encontrada');
        return payments;
    } 

    // eliminar una orden por id
    async remove(id: string) {
        const payments = await this.findOne(id);
        return await this.paymentsRepository.remove(payments);
    }


}