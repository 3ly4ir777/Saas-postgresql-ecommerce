import { Controller, Get, Post, Put,Delete, Body, Param, ParseUUIDPipe } from '@nestjs/common';
import { CreateTaxesDto } from '../dto/create-taxes.dto';
import { TaxesService } from '../taxes.services'


// terminar cotrolador y module de taxes
@Controller('taxes')
export class TaxesController {
    constructor(private readonly taxessService: TaxesService) {}

    @Post()
    create(@Body() createTaxesDto: CreateTaxesDto) {
        return this.taxessService.create(createTaxesDto);
    }

    @Get()
    FindAll() {
        return this.taxessService.findAll();
    }

    @Get(':id')
    FindOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.taxessService.findOne(id)
    }

    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe ) id: string) {
        return this.taxessService.remove(id) 
    }
}