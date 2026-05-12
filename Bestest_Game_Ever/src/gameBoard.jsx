import { useEffect } from "react";




    

function GameBoard({ enemies, projectile, players }) {
    
    // useEffect(() => {
    //     enemies.forEach(
    //         (enemy) => {
    //             enemy.draw(document.getElementById("canvas").getContext("2d"))
    //         }
    //     )

    // }, [enemies,projectile,players])
    return(
    <canvas id="canvas" width="100vw" height="100vh" style={{background:"red"}}  ></canvas>
)
    
}

export default GameBoard