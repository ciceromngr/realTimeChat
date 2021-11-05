import { RoomsService } from '../service/RoomsService'

class RoomsController {

    async handle(user1: number, name: string) {
        const roomsService = new RoomsService()
        await roomsService.handle(user1, name)
    }

    async getRooms() {
        const roomsService = new RoomsService()
        const rooms = await roomsService.getRooms()
        return rooms
    }
}

export { RoomsController }