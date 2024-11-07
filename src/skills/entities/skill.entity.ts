import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Skill {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 20,
        unique: true,
    })
    name: string;

    @Column({
        type: "varchar",
        length: 500
    })
    description: string;

    @Column()
    ability: string;
}
