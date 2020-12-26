import { Column, Entity } from 'typeorm';
import { IsEmail } from 'class-validator';
import { AbstractEntity } from '../../shared/abstract.entity';

@Entity({ name: 'users' })
export class User extends AbstractEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;
}
