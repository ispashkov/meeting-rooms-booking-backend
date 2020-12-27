import { ApiProperty } from '@nestjs/swagger';

export class UserUpdateDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;
}
