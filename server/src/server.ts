import 'dotenv/config'
import 'reflect-metadata'
import './database'

import express from 'express'
import { Server, Socket } from 'socket.io'
import http from 'http'
import { UsersController } from './app/controller/UsersController'

const port_Listen = process.env.PORT || 4000
const host_front = process.env.HOST_FRONT || 'http://localhost:3000'

const app = express()
const server = http.createServer(app)
const sockets = new Server(server, {
    cors: { origin: host_front }
})

// controller
const usersController = new UsersController()

sockets.on('connection', (socket) => {

    refreshUsers()

    socket.on('disconnect', async () => {
        console.log(`${socket.id} desconectou.`)
    });

    socket.on('CadastroUsuario', async (usuario) => {
        const user = await usersController.handle(usuario, socket.id)
        socket.emit('UsuarioLogado', user)
        refreshUsers()
    })

})

const refreshUsers = async () => {
    const users = await usersController.listUsers()
    sockets.emit('UsersRefresh', users)
}

server.listen(port_Listen, () => console.log(`Server is Running on port:${port_Listen}`))