import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Race {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    name: string;

    @Column({
        type: "varchar",
        length: 300
    })
    description: string;



}
