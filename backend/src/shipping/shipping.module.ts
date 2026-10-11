import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShippingController } from './controller/shipping.controller';
import { ShippingService } from './shipping.services';
import { Shipping } from './entities/shipping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shipping])],
  controllers: [ShippingController],
  providers: [ShippingService],
  exports: [ShippingService],
})
export class ShippingModule {

}
