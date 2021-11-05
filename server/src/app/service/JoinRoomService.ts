import { getCustomRepository } from "typeorm"
import { JoinRoomRepository } from "../repository/JoinRoomRepository"

export interface IJoinRoomRequest {
    username: string,
    socketid: string,
    room: string
}

class JoinRoomService {

    async handle({ username, room , socketid }: IJoinRoomRequest) {
        const joinRoomRepository = getCustomRepository(JoinRoomRepository)
        
        const user = await joinRoomRepository.findOne({ username })
        
        if(user && user.room === room) {

            await joinRoomRepository.save({
                ...user,
                socketid
            })

        } else {

            const joinRoom = joinRoomRepository.create({
                username,
                socketid,
                room
            })

            await joinRoomRepository.save(joinRoom)
            
        }

    }

}

export { JoinRoomService }