import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity()
class Messages {


    @PrimaryColumn({
        type: 'integer',
        generated: 'increment'
    })
    readonly id: number

    @Column()
    room: string
    
    @Column()
    msg: string
    
    @Column()
    username: string

    @CreateDateColumn()
    createdAt: Date

}

export { Messages }