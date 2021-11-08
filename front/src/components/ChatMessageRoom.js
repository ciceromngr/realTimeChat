import React, { useState, useEffect } from 'react'

const ChatMessageRoom = (props) => {
    // {id: 1, room: 'Sala de valas', msg: 'Eae familia', username: 'Cicero Romao', createdAt: '2021-11-05T14:18:35.000Z'}
    const [sendMessage, setSendMessage] = useState('')

    const handleSendMessage = (e) => {
        e.preventDefault()
        props.sendPrivateMessage(sendMessage)
        setSendMessage('')
    }

    useEffect(() => {
        const elem = document.getElementById('container-message__chat')
        elem.scrollTop = elem.scrollHeight
    }, [props.receiveMessage])


    return (
        <div>
            <div className="container-message__info">
                <button className="btn__chat-private" onClick={() => props.isSelected(false)}>Voltar</button>
                <p>{props.joinRoom.roomid}</p>
            </div>
            <div id="container-message__chat" className="container-message__chat">
                {props.receiveMessage && props.receiveMessage.map((m, i) => (
                    <div
                        key={i}
                        className="container-message__message"
                        style={{ justifyContent: m.username !== props.userName ? 'flex-start' : 'flex-end' }}>

                        {m.username !== props.userName ? (<><span className="container-message__otherUserLogado">{m.username}</span> <span className="container-message__content">{m.msg}</span> </>) :
                            (<><span className="container-message__content-user">{m.msg}</span> <span className="container-message__userLogado">{m.username}</span></>)
                        }
                    </div>

                ))}
            </div>
            <form onSubmit={(e) => handleSendMessage(e)} className="chat-message__form">
                <input type="text" value={sendMessage} onChange={(e) => setSendMessage(e.target.value)} />
                <button type="submit" disabled={sendMessage.trim() ? false : true}>Enviar</button>
            </form>

        </div>
    )
}

export default ChatMessageRoom
