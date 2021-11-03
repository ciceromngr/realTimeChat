import React from 'react'

const ListUsers = (props) => {
    const handleAddAmigo = (user) => {
        const usuario1 = props.listUsers.find(user => user.name === props.userName)
        props.socket.emit('CreateRoom', { user1: usuario1.id, user2: user.id })
    }

    const userListName = props.listUsers && props.listUsers.filter(user => user.name !== props.userName)
    return (
        <div>
            <div className="list-user__container">
                {userListName && userListName.map((user, i) => (
                    <div key={i} style={{ marginBottom: '15px' }}>
                        {user.name}
                        <button onClick={() => handleAddAmigo(user)}>+</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListUsers
