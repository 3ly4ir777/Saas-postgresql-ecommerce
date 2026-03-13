import {
Controller, 
Get,
Post, 
Put, 
Delete, 
Body, 
Param, 
ParseUUIDPipe, 
ClassSerializerInterceptor, 
UseInterceptors
} from '@nestjs/common';
import { UserService } from '../user.services';
import { CreateUserDto } from '../dto/createUser.dto';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService) {} 
    @Post('Register')
    async create(@Body() CreateUserDto: CreateUserDto) {
        return await this.userService.create(CreateUserDto)
    }  

    @Get()
    async findAll() {
        return await this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseUUIDPipe) id: string) {
        return await this.userService.findOne(id);
    }

    @Put(':id')
    


    @Delete(':id')
    async remove(@Param('id', ParseUUIDPipe) id: string) {
        return await this.userService.remove(id);
    }

    


}

