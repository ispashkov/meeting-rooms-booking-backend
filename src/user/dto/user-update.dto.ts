import { ApiProperty } from '@nestjs/swagger';
import { Id } from '../../shared/types/id.types';

export class UserUpdateDto {
  @ApiProperty()
  id: Id;

  @ApiProperty()
  name: string;
}
