import React, { useState, useEffect } from 'react'
import ChatMessageGlobal from './ChatMessageGlobal'
import ChatMessageRoom from './ChatMessageRoom'
import ListUsers from './ListUsers'

const Chat = (props) => {

    const [nameRoom, setNameRoom] = useState('')
    const [joinRoom, setJoinRoom] = useState()
    const [isSelected, setIsSelected] = useState(false)
    const [message, setMessage] = useState()

    const sendMessageGLobal = (message) => {
        const send = {
            msg: message,
            nameUser: props.usuario.name
        }
        props.socket.emit('SendMessage', send)
    }

    const handleCreateRoom = (e) => {
        e.preventDefault()
        const usuario1 = props.usersRefresh.find(user => user.name === props.usuario.name)
        props.socket.emit('CreateRoom', { user1: usuario1.id, nameRoom })
        setNameRoom('')
    }

    const handleJoinRoom = (room) => {
        const join = {
            username: props.usuario.name,
            room: room.roomid
        }

        props.socket.emit('JoinRoom', join,
            (message) => setMessage(message))
        setJoinRoom(room)
        setIsSelected(true)
    }

    
    const sendPrivateMessage = (message) => {
        const sendPrivate = {
            room: joinRoom && joinRoom.roomid,
            msg: message,
            username: props.usuario.name
        }
        props.socket.emit('SendPrivateMessage', sendPrivate, 
        (msg) => setMessage(msg))
    }
    
    useEffect(() => {
        // props.socket.on('RecevePrivateMessage', (msg) => {
            setMessage(props.receivePrivateMessage)
        // })
    }, [props.receivePrivateMessage])

    return (
        <div className="chat-container">
            <div className="chat-container__config">
                <div className="chat-user__logado">
                    {props.usuario.name}
                </div>
                <div className="chat-list">
                    <span>Global users</span>
                    <div>
                        <ListUsers
                            socket={props.socket}
                            listUsers={props.usersRefresh}
                            userName={props.usuario.name}
                            room={props.room}
                        />
                    </div>

                    <div>
                        <form className="chat-container__form-room" onSubmit={(e) => handleCreateRoom(e)}>
                            <input
                                type="text"
                                value={nameRoom}
                                onChange={(e) => setNameRoom(e.target.value)}
                                placeholder="criar sala"
                            />
                            <button>+</button>
                        </form>
                        {props.rooms && props.rooms.map((room, i) => (
                            <div className="chat-container__form-select-room" key={i}>
                                <p>{room.roomid}</p>
                                <button onClick={() => handleJoinRoom(room)}>Entrar</button>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="chat-message">
                {!isSelected && (
                    <ChatMessageGlobal
                        sendMessage={sendMessageGLobal}
                        receiveMessage={props.receiveMessage}
                        userName={props.usuario.name}
                    />
                )}
                {isSelected && (
                    <ChatMessageRoom
                        isSelected={setIsSelected}
                        joinRoom={joinRoom}
                        receiveMessage={message}
                        sendPrivateMessage={sendPrivateMessage}
                        userName={props.usuario.name}
                    />
                )}
            </div>
        </div>
    )
}

export default Chat
