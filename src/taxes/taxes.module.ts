import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxesController } from './controller/taxes.controller';
import { TaxesService } from './taxes.services';
import { Taxes } from './entities/taxes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Taxes])],
  controllers: [TaxesController],
  providers: [TaxesService],
  exports: [TaxesService],
})
export class TaxesModule {

}
