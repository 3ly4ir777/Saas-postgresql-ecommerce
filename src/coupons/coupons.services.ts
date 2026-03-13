import {Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Entity, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Coupon } from './entities/coupon.entity';
import { CreateCouponDto } from './dto/create-coupons';

@Injectable()
    export class CouponsService {
        constructor(
            @InjectRepository(Coupon)
            private readonly couponRepository: Repository<Coupon>,
        ) {}

        async create(createCouponDto: CreateCouponDto) {
        const existingCoupon = await this.couponRepository.findOne({ where: {code: createCouponDto.code }});
        if (existingCoupon) throw new BadRequestException('el cupon ya existe');

        const coupon = this.couponRepository.create(createCouponDto);
        return await this.couponRepository.save(coupon);
    }

    //obtener todos los cupones
    async findAll() {
        return await this.couponRepository.find();
    }

    //obtener un cupon por id
    async findOne(id: string) {
        const coupon = await this.couponRepository.findOneBy({ id });
        if (!coupon) throw new NotFoundException('Cupon no encontrada');
        return coupon;
    } 

    // eliminar un cupon por id
    async remove(id: string) {
        const coupon = await this.findOne(id);
        return await this.couponRepository.remove(coupon);
    }


}