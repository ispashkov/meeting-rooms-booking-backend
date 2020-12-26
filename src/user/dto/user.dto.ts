import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import { AbstractDto } from '../../shared/abstract.dto';

export class UserDto extends AbstractDto {
  @ApiProperty()
  readonly name: string;

  constructor(user: User) {
    super(user);
    this.name = user.name;
  }
}
