import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  name: string;

  @Column({nullable:true})
  password: string;

  @Column({ default: true })
  isActive: boolean;
}