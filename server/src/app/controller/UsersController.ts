import { UsersService } from "../service/UsersService";

class UsersController {

    async handle(name: string, socketId: string) {
        const usersService = new UsersService()

        const user = await usersService.handle({ name, socketId })

        return user
    }

    async listUsers() {
        const usersService = new UsersService()
        const users = await usersService.listALlUsers()
        return users
    }

    async getUserBySocketId(socketId: string) {
        const usersService = new UsersService()
        const user = await usersService.getUserBySokcetId(socketId)
        return user
    }

    async exitUser(socketId: string) {
        const usersService = new UsersService()
        const msg = await usersService.exitUser(socketId)
        return msg
    }

}

export { UsersController }