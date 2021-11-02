import { getCustomRepository } from "typeorm"
import { MessageGlobalRepository } from "../repository/MessageGlobalRepository"

class MessageGlobalService {
    async sendMessage(message: string, nameUser: string) {
        const messageGlobalRepository = getCustomRepository(MessageGlobalRepository)
        
        const messages = messageGlobalRepository.create({
            nameUser,
            msg: message
        })

        await messageGlobalRepository.save(messages)
    }

    async receiveMessage() {
        const messageGlobalRepository = getCustomRepository(MessageGlobalRepository)
        const msg = await messageGlobalRepository.find()
        return msg
    }
}

export { MessageGlobalService }