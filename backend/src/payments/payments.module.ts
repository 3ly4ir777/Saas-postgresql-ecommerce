import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsController } from './controller/payments.controller';
import { PaymentsService } from './payments.services';
import { Payments } from './entities/payments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payments])],
  controllers: [PaymentsController],
  providers: [PaymentsService],
  exports: [PaymentsService],
})
export class PaymentsModule {

}
