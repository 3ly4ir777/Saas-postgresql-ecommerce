import { Controller, Get, Post, Put,Delete, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { CreateOrderDto } from '../dto/create-order.dto';
import { OrdersService } from '../orders.services'

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Post()
    create(@Body() createCouponDto: CreateOrderDto) {
        return this.ordersService.create(createCouponDto);
    }

    @Get()
    FindAll() {
        return this.ordersService.findAll();
    }

    @Get(':id')
    FindOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.ordersService.findOne(id)
    }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe ) id: string) {
        return this.ordersService.remove(id) 
    }
}