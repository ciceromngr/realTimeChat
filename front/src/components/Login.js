import React, { useState } from 'react'

const Login = (props) => {
    const [name, setName] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()

        if (name !== '') {
            props.socket.emit('CadastroUsuario', name)
            props.socket.open();
        }
        setName('')
    }

    return (
        <div className="login-container">
            <form onSubmit={(e) => handleLogin(e)}>
                Login
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login
