import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Class {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
        type: "varchar",
        length: 12
    })
    name: string;

    @Column({
        type: "varchar",
        length: 500
    })
    description: string;
}
