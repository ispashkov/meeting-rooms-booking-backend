import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserUpdateDto } from './dto/user-update.dto';
import { UserCreateDto } from './dto/user-create.dto';
import { UserDto } from './dto/user.dto';
import { Id } from '../shared/types/id.types';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @ApiBody({ type: UserCreateDto })
  @ApiResponse({ type: UserDto })
  create(@Body() user: UserCreateDto): Promise<UserDto> {
    return this.userService.create(user);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: UserUpdateDto })
  @ApiResponse({ type: UserDto })
  update(@Param() id: number, @Body() user: UserUpdateDto): Promise<UserDto> {
    return this.userService.update(id, user);
  }

  @Get()
  @ApiResponse({ type: [UserDto] })
  getAll(): Promise<Array<UserDto>> {
    return this.userService.getAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ type: UserDto })
  getById(@Param('id') id: Id): Promise<UserDto> {
    return this.userService.getById(id);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: String })
  remove(@Param() id: Id): Promise<void> {
    return this.userService.delete(id);
  }
}
