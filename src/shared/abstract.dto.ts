import { AbstractEntity } from './abstract.entity';
import { Id } from './types/id.types';

export class AbstractDto {
  id: Id;
  createdAt: Date;
  updatedAt: Date;

  constructor(entity: AbstractEntity) {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }
}
