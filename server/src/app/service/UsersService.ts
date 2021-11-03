import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repository/UsersRepository"
import * as yup from 'yup'

export interface IHandleUserRequest {
    name: string,
    socketId: string
}

class UsersService {

    async handle({ name, socketId }: IHandleUserRequest) {
        const usersRepository = getCustomRepository(UsersRepository)

        const schema = yup.object().shape({
            name: yup.string().required(),
            socketId: yup.string()
        })

        if (!(await schema.isValid({ name, socketId }))) throw new Error('Nome é obrigatorio')

        const userExist = await usersRepository.findOne({ name })

        if (userExist) {

            await usersRepository.save({ ...userExist, socketId })

            const user = await usersRepository.findOne({ name })

            return user

        }

        const user = usersRepository.create({
            name,
            socketId
        })

        await usersRepository.save(user)

        return user;
    }

    async listALlUsers () {
        const usersRepository = getCustomRepository(UsersRepository)
        const users = await usersRepository.find()
        return users
    }
    
    async getUserBySokcetId(socketId: string) {
        const usersRepository = getCustomRepository(UsersRepository)
        const user = await usersRepository.findOne({ socketId })
        return user
    }

    async exitUser(socketId: string, boolean: boolean) {

        const usersRepository = getCustomRepository(UsersRepository)

        const socketExist = await usersRepository.findOne({ socketId })

        if(socketExist && boolean === true) {
            
            return {
                msg: `${socketExist.name} entrou`,
                status: true
            }

        } else {

            await usersRepository.save({ ...socketExist, socketId: '' })
            return {
                msg: `${socketExist.name} saiu`,
                status: false
            }

        }
    }

}

export { UsersService }