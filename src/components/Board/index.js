import React from 'react'
import { useSelector } from 'react-redux';

const Board = () => {
const canvasRef = React.useRef(null);
const clickedVisualMenuItem = useSelector((state)=> state.menu.activeVisualChangesMenuItem);
const chosenColor = useSelector((state)=> state.toolBox.color);
const chosenBrushSize = useSelector((state)=> state.toolBox.brushSize);
console.log(clickedVisualMenuItem,chosenColor,chosenBrushSize )

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