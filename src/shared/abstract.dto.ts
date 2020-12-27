import { ApiProperty } from '@nestjs/swagger';
import { AbstractEntity } from './abstract.entity';
import { Id } from './types/id.types';

export class AbstractDto {
  @ApiProperty()
  id: Id;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor(entity: AbstractEntity) {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }
}
