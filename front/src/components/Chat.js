import React, { useEffect, useState } from 'react'
import ListUsers from './ListUsers'

const Chat = (props) => {
    return (
        <div>
            {props.usuario.name}

            <ListUsers listUsers={props.usersRefresh} userName={props.usuario.name} />
        </div>
    )
}

export default Chat
