import React, { useEffect } from 'react'
import socketClient from 'socket.io-client';
const host = process.env.REACT_APP_SOCKET_ADDRESS || 'http://localhost:4000'
const socket = socketClient(host, {
  autoConnect: false,
});

function App() {

  useEffect(() => {
    socket.on('connect', () => console.log('Sokcet conectado'))
    socket.open();
  }, [])

  return (
    <div className="App">
      Ola Mundo
    </div>
  );
}

export default App;
