import React, { useState, useEffect } from 'react';
import './styles/Chat.module.css'
export default function Chat (){
  const [playerId, setPlayerId] = useState('');
  const [message, setMessage] = useState('');
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

  const sendMessage = () => {
  if (ws && message.trim()) {
    const data = {
      type: 'gameAction',
      playerId,
      action: message
    };

    ws.send(JSON.stringify(data));

    setMessages((prev) => [...prev, data]);

    setMessage('');
  }
};
    return (
    <section id="chatSec">
        <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message"
          maxLength={50}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      <div>
        <h3>Chat Log:</h3>
       <ul>
  {messages.map((msg, index) => (
    <li key={index}>
      <strong>{msg.playerId}:</strong> {msg.action}
    </li>
  ))}
</ul>
      </div>
    </section>
    )
}