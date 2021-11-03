import { RoomsService } from '../service/RoomsService'

class RoomsController {

    async handle(user1: number, user2: number) {
        const roomsService = new RoomsService()
        await roomsService.handle(user1, user2)
    }

    async getRooms() {
        const roomsService = new RoomsService()
        const rooms = await roomsService.getRooms()
        return rooms
    }
}

export { RoomsController }