import { IsNumber, IsString, IsIn, IsOptional, IsPositive, IsNotEmpty } from 'class-validator';

export class CreatePaymentsDto {
    @IsNumber()
    @IsPositive()
    amount: number;

    @IsNumber()
    @IsPositive()
    totalamount: number;

    @IsString()
    @IsNotEmpty()
    @IsIn(['pending', 'successed', 'failed' ])
    status: string;

    @IsString()
    @IsOptional()
    gatewayTransactionId?: string;

    @IsString()
    @IsNotEmpty()
    @IsIn(['stripe', 'paypal', 'mercadopago'])
    paymentGateway: string;
}

