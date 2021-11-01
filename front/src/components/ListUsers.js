import React from 'react'

const ListUsers = (props) => {
    console.log("Salve menor",props.listUsers)

    const userListName = props.listUsers.filter(user => user.name !== props.userName)
    console.log(userListName)
    return (
        <div>
            {userListName.map((user, i) => (
                <div key={i}>{user.name}</div>
            ))}
        </div>
    )
}

export default ListUsers
