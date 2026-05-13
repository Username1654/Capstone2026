import React, { useState, useEffect } from 'react';
import './styles/App.css'
import './styles/thing.css'
import Chat from './Chat';
import GameBoard from './gameBoard';
import Enemy from './Enemy';
function App() {
  const [playerId, setPlayerId] = useState('');
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);
const [keyPress,setKeyPress] = ['']
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:5173/ws');
    setWs(socket);
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'assignId') {
        setPlayerId(data.playerId);
      } else {
        setMessages((prev) => [...prev, data]);
      }
    };
    return () => {
      socket.close();
    };
  }, []);
  
  return (
    <div className="App">
      <section id="game">
      <h1>Bestest game!</h1>
      <p>Your Player ID: <strong>{playerId}</strong></p>
      </section>
      <Chat/>
      <GameBoard player={"players"} projectile={"projectile"}/>
    </div>
  );
}

export default App;

