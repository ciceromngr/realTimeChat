import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('joinRoom')
class JoinRoom {

    @PrimaryColumn()
    readonly id: number

    @Column()
    username: string
    
    @Column()
    socketid: string
    
    @Column()
    room: string

}

export { JoinRoom }