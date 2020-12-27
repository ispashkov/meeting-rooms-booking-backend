import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import { AbstractDto } from '../../shared/abstract.dto';

export class UserDto extends AbstractDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly email: string;

  constructor(user: User) {
    super(user);
    this.name = user.name;
    this.email = user.email;
  }
}
