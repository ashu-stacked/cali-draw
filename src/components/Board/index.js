import React from 'react'

const Board = () => {
 const canvasRef = React.useRef(null)   
React.useEffect(()=>{
  const canvas = canvasRef.current;
   if(canvas){
    const context = canvas.getContext('2d');

    //when mounting the board
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
   }
},[])

  return (
    <div>
        <canvas ref = {canvasRef}></canvas>
    </div>
  )
}

export default Board