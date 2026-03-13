import { Controller, Get, Post, Put,Delete, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { CreateCouponDto } from '../dto/create-coupons';
import { CouponsService } from '../coupons.services'

@Controller('coupons')
export class CouponsController {
    constructor(private readonly couponsService: CouponsService) {}

    @Post()
    create(@Body() createCouponDto: CreateCouponDto) {
        return this.couponsService.create(createCouponDto);
    }

    @Get()
    FindAll() {
        return this.couponsService.findAll();
    }

    @Get(':id')
    FindOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.couponsService.findOne(id)
    }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe ) id: string) {
        return this.couponsService.remove(id) 
    }
}