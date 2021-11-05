import { JoinRoomService } from "../service/JoinRoomService"

class JoinRoomController {

    async handle(username: string, room: string, socketid: string) {
        const joinRoomService = new JoinRoomService()
        await joinRoomService.handle({ username, room, socketid })
    }

}

export { JoinRoomController }