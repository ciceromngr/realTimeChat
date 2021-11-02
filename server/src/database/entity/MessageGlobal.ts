import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity('messageGlobal')
class MessageGlobal {

    @PrimaryColumn({
        type: 'integer',
        generated: 'increment'
    })
    readonly id: number

    @Column()
    nameUser: string

    @Column()
    msg: string
    
    @CreateDateColumn()
    createdAt: Date
}

export { MessageGlobal }