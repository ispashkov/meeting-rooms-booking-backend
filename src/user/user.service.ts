import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { Id } from '../shared/types/id.types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(user: UserCreateDto): Promise<User> {
    const createdUser = this.userRepository.create(user);
    await this.userRepository.save(createdUser);

    return createdUser;
  }

  async update(id: number, user: UserUpdateDto): Promise<User> {
    await this.userRepository.update(id, user);
    const updatedUser = await this.userRepository.findOne(id);

    if (updatedUser) return updatedUser;

    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async delete(id: Id): Promise<void> {
    const deletedUser = await this.userRepository.delete(id);
    if (!deletedUser.affected) {
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
  }

  async getAll(): Promise<Array<User>> {
    return await this.userRepository.find();
  }

  async getById(id: Id): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (user) return user;

    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
}
