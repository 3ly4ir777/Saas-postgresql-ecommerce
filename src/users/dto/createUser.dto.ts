import {isEmail, IsString, MinLength, isEnum, IsOptional, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty({message: 'El nombre es requerido'})
    name: string;

    @IsEmail({}, {message: 'El email no es valido'})
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsString()
    @IsOptional()
    role: string;
}