import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Timer {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column({ comment: "타이머 이름", nullable: false, unique: true})
    name : string;

    @Column({ comment: "종료 시간", nullable: false})
    date: Date;
}
