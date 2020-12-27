import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;
}
