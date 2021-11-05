import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Users } from "./Users";

@Entity()
class Rooms {

    @PrimaryColumn({
        type: 'integer',
        generated: 'increment'
    })
    readonly id: string

    @Column()
    roomid: string

    @Column()
    userid: number

    @JoinColumn({ name: 'userid' })
    @ManyToOne(() => Users)
    us1: Users

}

export { Rooms }