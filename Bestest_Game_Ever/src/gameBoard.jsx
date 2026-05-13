import { useEffect } from "react";
import { useState } from "react";
import './styles/App.css'
import { WebSocketServer, ws } from 'ws';



//  const projectile
document.addEventListener("keydown", function (keyPress) {

    if (ws && keyPress.key) {
        console.log(keyPress.key)
        const data = {
            type: 'keyPress',
            playerId,
            action: keyPress.key
        };

        ws.send(JSON.stringify(data));
    }

})


function GameBoard({ projectile, players }) {
    
  
    return(
    <canvas id="canvas" width="100vw" height="100vh" style={{background:"red"}}  ></canvas>
)
    
}

export default GameBoard