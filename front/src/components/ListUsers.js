import React from 'react'

const ListUsers = (props) => {
    const userListName = props.listUsers && props.listUsers.filter(user => user.name !== props.userName)
    return (
        <div className="list-user__container">
            {userListName && userListName.map((user, i) => (
                <div key={i} style={{marginBottom: '15px'}}>{user.name}</div>
            ))}
        </div>
    )
}

export default ListUsers
