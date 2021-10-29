import 'dotenv/config'
import express from 'express'
import { Server } from 'socket.io'
import http from 'http'

const port_Listen = process.env.PORT || 4000
const host_front = process.env.HOST_FRONT || 'http://localhost:3000'

const app = express()
const server = http.createServer(app)
const sockets = new Server(server, {
    cors: { origin: host_front }
})

sockets.on('connection', (socket) => {
    console.log(socket.id)
})


server.listen(port_Listen, () => console.log(`Server is Running on port:${port_Listen}`))