import 'reflect-metadata'
import './database'
import 'dotenv/config'

import express from 'express'
import { Server, Socket } from 'socket.io'
import http from 'http'
import { UsersController } from './app/controller/UsersController'
import { MessageGlobalController } from './app/controller/MessageGlobalCOntroller'
import { RoomsController } from './app/controller/RoomsController'
import { MessagesController } from './app/controller/MessagesController'

const port_Listen = process.env.PORT || 4000
const host_front = process.env.HOST_FRONT || 'http://localhost:3000'

const app = express()
const server = http.createServer(app)
const sockets = new Server(server, {
    cors: { origin: host_front }
})

// All CONTROLLERS
const usersController = new UsersController()
const messageGlobalController = new MessageGlobalController()
const roomsController = new RoomsController()
const messageController = new MessagesController()
//

sockets.on('connection', (socket) => {

    refreshUsers()
    refreshMessages()
    
    socket.on('disconnect', () => {
        usersStatus(socket.id, false)
        refreshUsers()
    });

    socket.on('CadastroUsuario', async (usuario) => {
        const user = await usersController.handle(usuario, socket.id)
        socket.emit('UsuarioLogado', user)
        refreshUsers()
        usersStatus(socket.id, true)
    })

    socket.on('SendMessage', async (message) => {
        await messageGlobalController.sendMessage(message.msg, message.nameUser)
        refreshMessages()
    })

    socket.on('CreateRoom', async (room) => {
        await roomsController.handle(room.user1, room.user2)
    })

})

const refreshUsers = async () => {
    const users = await usersController.listUsers()
    const usersOnline = users.filter(user => user.socketId !== '')
    sockets.emit('UsersRefresh', usersOnline)
}

const usersStatus = async (socketId: string, boolean: boolean) => {
    const msg = await usersController.exitUser(socketId, boolean)
    sockets.emit('UsersStatus', msg)
    refreshUsers()
}

const refreshMessages = async () => {
    const msg = await messageGlobalController.receiveMessage()
    sockets.emit('ReceiveMessage', msg)
}

server.listen(port_Listen, () => console.log(`Server is Running on port:${port_Listen}`))