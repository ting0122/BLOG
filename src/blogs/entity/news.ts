import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class news {
    @PrimaryGeneratedColumn()
    id : number ;

    @Column()
    title : string ;

    @Column()
    description : string ;
}