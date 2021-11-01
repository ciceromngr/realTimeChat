import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity('users')
class Users {

    @PrimaryColumn({
        type: 'integer',
        generated: 'increment'
    })

    readonly id: number

    @Column()
    name: string

    @Column()
    socketId: string

    @CreateDateColumn()
    createdAt: Date

}

export { Users }