import React, { useEffect, useState } from 'react'
import socketClient from 'socket.io-client';
import Chat from './components/Chat';
import Login from './components/Login';
const host = process.env.REACT_APP_SOCKET_ADDRESS || 'http://localhost:4000'
const socket = socketClient(host, {
  autoConnect: false,
});

function App() {

  const [usuarioLogado, setUsuarioLogado] = useState()
  const [usersRefresh, setUsersRefresh] = useState()

  useEffect(() => {
    socket.on('connect', () => console.log('Sokcet conectado'))

    socket.on('UsuarioLogado', usuario => {
      setUsuarioLogado(usuario)
    })

    socket.on('UsersRefresh', listPlayers => {
      setUsersRefresh(listPlayers)
    })

    socket.open();
  }, [])

  return (
    <div>
      {!usuarioLogado && <Login socket={socket} />}
      {usuarioLogado && <Chat socket={socket} usersRefresh={usersRefresh} usuario={usuarioLogado} />}
    </div>
  );
}

export default App;
