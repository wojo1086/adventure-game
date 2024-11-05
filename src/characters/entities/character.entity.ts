import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Race } from '../../races/entities/race.entity';
import { User } from '../../users/entities/users.entity';
import { Class } from '../../classes/entities/class.entity';

@Entity()
export class Character {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 20,
    })
    name: string;

    @Column({
        default: 1,
    })
    level: number;

    @Column({
        default: 0,
    })
    experience: number;

    @Column({
        default: 0,
    })
    strength: number;

    @Column({
        default: 0,
    })
    dexterity: number;

    @Column({
        default: 0,
    })
    constitution: number;

    @Column({
        default: 0,
    })
    intelligence: number;

    @OneToOne(() => Race, (race) => race.id, {
        eager: true,
    })
    @JoinColumn()
    race: Race;

    @OneToOne(() => Class, (c) => c.id, {
        eager: true,
    })
    @JoinColumn()
    class: Class;

    @ManyToOne(() => User, (user) => user.uid)
    user: User;
}
