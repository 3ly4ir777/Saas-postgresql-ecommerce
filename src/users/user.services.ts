import {Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Entity, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {User} from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
    export class UserService {
        constructor(
            @InjectRepository(User)
            private readonly userRepository: Repository<User>,
        ) {}

        async findByEmail(email: string): Promise<User | null> {
            return await this.userRepository.findOne({
                 where: { 
                    email: email 
                } });
        }

        async create(createUserDto: CreateUserDto) {
            // verificar si el usuario ya existe en nuestra BD.
            const existingUser = await this.findByEmail(createUserDto.email);
            if (existingUser) throw new BadRequestException('El email ya esta registrado');

            // Encriptar la contraseña
            const hashedPassword = await bcrypt.hash(createUserDto.password, 6);

            const newUser = this.userRepository.create({
                ...createUserDto,
                password: hashedPassword,
            });

            return await this.userRepository.save(newUser);
        }

        //obtener todos los usuarios
        async findAll() {
            return await this.userRepository.find();
        }

        //obtener un usuario por id
        async findOne(id:string) {
            const user = await this.userRepository.findOneBy({ id });
            if(!user) throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
            return user;
        }

        //actualizar un usuario por id
        async update(id: string, updateUserDto: CreateUserDto) {
            const user = await this.findOne(id);
            if (!user) throw new NotFoundException(`Usuario con ID ${id} no encontrado`);

        }


        //Borrar usuario 
        async remove (id: string) {
            const user = await this.findOne(id);
            return await this.userRepository.remove(user);
        }
    }
    
