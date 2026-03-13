import {Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Entity, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Taxes } from './entities/taxes.entity';
import { CreateTaxesDto } from './dto/create-taxes.dto';

@Injectable()
    export class TaxesService {
        constructor(
            @InjectRepository(Taxes)
            private readonly taxesRepository: Repository<Taxes>,
        ) {}

        async create(createPaymentsDto: CreateTaxesDto) {
        const existingTaxes = await this.taxesRepository.findOne({ where: {name: createPaymentsDto.name}});
        if (existingTaxes) throw new BadRequestException('el impuesto');

        const payment = this.taxesRepository.create(createPaymentsDto);
        return await this.taxesRepository.save(payment);
    }

    //obtener todos los ordenes
    async findAll() {
        return await this.taxesRepository.find();
    }

    //obtener una orden por id
    async findOne(id: string) {
        const taxes = await this.taxesRepository.findOneBy({ id });
        if (!taxes) throw new NotFoundException('Orden no encontrada');
        return taxes;
    } 

    // eliminar una orden por id
    async remove(id: string) {
        const taxes = await this.findOne(id);
        return await this.taxesRepository.remove(taxes);
    }


}