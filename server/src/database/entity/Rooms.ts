import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
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
    user1: number

    @Column()
    user2: number

    @JoinColumn({ name: 'user1' })
    @ManyToOne(() => Users)
    us1: Users

    @JoinColumn({ name: 'user2' })
    @ManyToOne(() => Users)
    us2: Users

    constructor () {
        if(!this.roomid) this.roomid = uuid()
    }
}

export { Rooms }