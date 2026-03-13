import { Controller, Get, Post, Put,Delete, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { CreateShippingDto } from '../dto/create-shipping.dto';
import { ShippingService } from '../shipping.services'

@Controller('shipping')
export class ShippingController {
    constructor(private readonly shippingService: ShippingService) {}

    @Post()
    create(@Body() createShippingDto: CreateShippingDto) {
        return this.shippingService.create(createShippingDto);
    }

    @Get()
    FindAll() {
        return this.shippingService.findAll();
    }

    @Get(':id')
    FindOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.shippingService.findOne(id)
    }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe ) id: string) {
        return this.shippingService.remove(id) 
    }
}