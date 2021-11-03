import { MessagesService } from '../service/MessagesService'

class MessagesController {

    async handle(
        room: string,
        msg: string,
        username: string
    ) {
        const messagesService = new MessagesService()
        await messagesService.handle({
            room,
            msg,
            username
        })
    }

    async getMessagesByRoom(room: string) {
        const messagesService = new MessagesService()
        const message = await messagesService.getMessagesByRoom(room)
        return message
    }
}

export { MessagesController }