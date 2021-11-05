import { getCustomRepository } from "typeorm"
import { RoomsRepository } from "../repository/RoomsRepository"

class RoomsService {

    async handle(userid: number, roomid: string) {
        const roomsRepository = getCustomRepository(RoomsRepository)

        const room = roomsRepository.create({
           userid,
           roomid
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