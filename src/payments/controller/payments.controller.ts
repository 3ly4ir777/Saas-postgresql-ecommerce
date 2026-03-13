import { Controller, Get, Post, Put,Delete, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { CreatePaymentsDto } from '../dto/create-payments.dto';
import { PaymentsService } from '../payments.services'

@Controller('payments')
export class PaymentsController {
    constructor(private readonly paymentsService: PaymentsService) {}

    @Post()
    create(@Body() createPaymentDto: CreatePaymentsDto) {
        return this.paymentsService.create(createPaymentDto);
    }

    @Get()
    FindAll() {
        return this.paymentsService.findAll();
    }

    @Get(':id')
    FindOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.paymentsService.findOne(id)
    }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe ) id: string) {
        return this.paymentsService.remove(id) 
    }
}