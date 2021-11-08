import React, { useEffect, useState } from 'react'

const ChatMessageGlobal = (props) => {
    
    const [sendMessage, setSendMessage] = useState('')

    const handleSendMessage = (e) => {
        e.preventDefault()
        props.sendMessage(sendMessage)
        setSendMessage('')
    }

    useEffect(() => {
        const elem = document.getElementById('container-message__chat')
        elem.scrollTop = elem.scrollHeight
    }, [props.receiveMessage])

    return (
        <div>
            <p className="container-message__title">Global Chat</p>
            <div id="container-message__chat" className="container-message__chat">
                {props.receiveMessage && props.receiveMessage.map((m, i) => (
                    <div
                        key={i}
                        className="container-message__message"
                        style={{ justifyContent: m.nameUser !== props.userName? 'flex-start': 'flex-end' }}>

                        {m.nameUser !== props.userName ? (<><span className="container-message__otherUserLogado">{m.nameUser}</span> <span className="container-message__content">{m.msg}</span> </>) :
                            (<><span className="container-message__content-user">{m.msg}</span> <span className="container-message__userLogado">{m.nameUser}</span></>)
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

export default ChatMessageGlobal
