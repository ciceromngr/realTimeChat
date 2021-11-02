import 'reflect-metadata'
import 'dotenv/config'
import './database'

import express from 'express'
import { Server, Socket } from 'socket.io'
import http from 'http'
import { UsersController } from './app/controller/UsersController'
import { MessageGlobalController } from './app/controller/MessageGlobalCOntroller'

const port_Listen = process.env.PORT || 4000
const host_front = process.env.HOST_FRONT || 'http://localhost:3000'

const app = express()
const server = http.createServer(app)
const sockets = new Server(server, {
    cors: { origin: host_front }
})

// controller
const usersController = new UsersController()
const messageGlobalController = new MessageGlobalController()

sockets.on('connection', (socket) => {

    refreshUsers()

    socket.on('disconnect', async () => {
        console.log(`${socket.id} desconectou.`)
        const msg = await usersController.exitUser(socket.id)
        console.log(msg)
    });

    socket.on('CadastroUsuario', async (usuario) => {
        const user = await usersController.handle(usuario, socket.id)
        socket.emit('UsuarioLogado', user)
        refreshUsers()
    })

    socket.on('SendMessage', async (message) => {
        await messageGlobalController.sendMessage(message.msg, message.nameUser)
        refreshMessages()
    })

})

const refreshUsers = async () => {
    const users = await usersController.listUsers()
    const usersOnline = users.filter(user => user.socketId !== '')
    sockets.emit('UsersRefresh', usersOnline)
}

const refreshMessages = async () => {
    const msg = await messageGlobalController.receiveMessage()
    sockets.emit('ReceiveMessage', msg)
}

server.listen(port_Listen, () => console.log(`Server is Running on port:${port_Listen}`))