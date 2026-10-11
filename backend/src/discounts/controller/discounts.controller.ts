import { Controller, Get, Post, Put,Delete, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { CreateDiscountDto } from '../dto/create-discount.dto';
import { DiscountsService } from '../discounts.services'

@Controller('discounts')
export class DiscountsController {
    constructor(private readonly discountsService: DiscountsService) {}

    @Post()
    create(@Body() createCouponDto: CreateDiscountDto) {
        return this.discountsService.create(createCouponDto);
    }

    @Get()
    FindAll() {
        return this.discountsService.findAll();
    }

    @Get(':id')
    FindOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.discountsService.findOne(id)
    }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe ) id: string) {
        return this.discountsService.remove(id) 
    }
}