//logica de negocio de autentificacion
import { Injectable, UnauthorizedException, ForbiddenException} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { UserService } from '../users/user.services'
import { CreateUserDto } from '../users/dto/createUser.dto'

@Injectable ()
export class AuthService {
    constructor(
        private readonly userService: UserService,
    ) {}
    
    async validateUserFromAuth0(payload: any){
        const { sub, name, email} = payload;

        let user = await this.userService.findByEmail(email);

        if(!user){
            const newUserDto: CreateUserDto = {
                name: name,
                email: email,
                password: `${sub}-auth0`, // genera una contrasenaunica basada en el sub
                role: 'user,'
                
            }

            user = await this.userService.create(newUserDto)
        }
    }
}