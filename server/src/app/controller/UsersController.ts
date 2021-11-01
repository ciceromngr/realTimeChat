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

}

export { UsersController }