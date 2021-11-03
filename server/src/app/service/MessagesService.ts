export interface IMessageRequest {
    room: string,
    msg: string,
    username: string
}

import { getCustomRepository } from 'typeorm'
import * as yup from 'yup'
import { MessagesRepository } from '../repository/MessagesRepository'

class MessagesService {

    async handle({ room, msg, username }: IMessageRequest) {
        const messagesRepository = getCustomRepository(MessagesRepository)
        const schema = yup.object().shape({

            room: yup.string().required(),
            msg: yup.string().required(),
            username: yup.string().required(),

        })

        if (!(await schema.isValid({ room, msg, username }))) throw new Error('Todos os campos sao obrogatorios')

        const message = messagesRepository.create({
            room,
            msg,
            username
        })

        await messagesRepository.save(message)

    }

    async getMessagesByRoom(room: string) {
        const messagesRepository = getCustomRepository(MessagesRepository)
        const messages = await messagesRepository.find()

        const message = messages.filter(msg => msg.room === room)
        return message
    }

}

export { MessagesService }