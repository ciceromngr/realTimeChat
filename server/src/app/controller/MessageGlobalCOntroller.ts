import { MessageGlobalService } from "../service/MessageGlobalService"

class MessageGlobalController {

    async sendMessage(message: string, userName: string) {
        const messageGlobalService = new MessageGlobalService()
        await messageGlobalService.sendMessage(message, userName)
    }

    async receiveMessage() {
        const messageGlobalService = new MessageGlobalService()
        const messages = await messageGlobalService.receiveMessage()
        return messages
    }

}

export { MessageGlobalController }