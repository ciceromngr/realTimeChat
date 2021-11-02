import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import ListUsers from './ListUsers'

const Chat = (props) => {

    const [receiveMessage, setReceiveMessage] = useState()

    const sendMessage = (message) => {
        const send = {
            msg: message,
            nameUser: props.usuario.name
        }
        props.socket.emit('SendMessage', send)
    }

    useEffect(() => {
        props.socket.on('ReceiveMessage', message => {
            setReceiveMessage(message)
        })
    }, [])

    return (
        <div className="chat-container">
            <div className="chat-container__config">
                <div className="chat-user__logado">
                    {props.usuario.name}
                </div>
                <div className="chat-list">
                    <span>Global users</span>
                    <div>
                        <ListUsers listUsers={props.usersRefresh} userName={props.usuario.name} />
                    </div>

                    {/* <div>
                        {[{}, {}].map((a, i) => (<div key={i}>Amigos</div>))}
                    </div> */}

                </div>
            </div>
            <div className="chat-message">
                <ChatMessage sendMessage={sendMessage} receiveMessage={receiveMessage} userName={props.usuario.name}/>
            </div>
        </div>
    )
}

export default Chat
