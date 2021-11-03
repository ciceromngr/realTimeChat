import { getCustomRepository } from "typeorm"
import { RoomsRepository } from "../repository/RoomsRepository"

class RoomsService {

    async handle(user1: number, user2: number) {
        const roomsRepository = getCustomRepository(RoomsRepository)

        const room = roomsRepository.create({
           user1,
           user2
        })

        await roomsRepository.save(room)
    }

    async getRooms() {
        const roomsRepository = getCustomRepository(RoomsRepository)
        const rooms = await roomsRepository.find()
        return rooms
    }
}

export { RoomsService }