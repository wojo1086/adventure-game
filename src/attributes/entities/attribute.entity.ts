import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum AttributeType {
    STRENGTH,
    DEXTERITY,
    CONSTITUTION,
    INTELLIGENCE,
    WISDOM
}

@Entity()
export class Attribute {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: 10,
    })
    strength: number;

    @Column({
        default: 10,
    })
    dexterity: number;

    @Column({
        default: 10,
    })
    constitution: number;

    @Column({
        default: 10,
    })
    intelligence: number;

    @Column({
        default: 10,
    })
    wisdom: number;
}
