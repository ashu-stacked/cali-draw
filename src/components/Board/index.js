import React from 'react'
import { useSelector } from 'react-redux';

const Board = () => {
const canvasRef = React.useRef(null);
const shouldDrawRef = React.useRef(false);
const clickedVisualMenuItem = useSelector((state)=> state.menu.activeVisualChangesMenuItem);
const {color, size} = useSelector((state)=> state.toolBox[clickedVisualMenuItem]);


React.useLayoutEffect(()=>{
  const canvas = canvasRef.current;
   if(canvas){
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseDown =(event) =>{
      shouldDrawRef.current =true;
      context.beginPath();
      context.moveTo(event.clientX, event.clientY);
    }

    const handleMouseMove =(event) =>{
      if(!shouldDrawRef.current) return;
      context.lineTo(event.clientX, event.clientY);
      context.stroke();
    }

    const handleMouseUp =() =>{
      shouldDrawRef.current =false;
    }
    //add event listerners on mounting
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mousemove', handleMouseMove);
   }
},[])

React.useEffect(()=>{
  if(!canvasRef.current) return;
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  const changeConfig = () =>{
    context.strokeStyle = color;
    context.lineWidth =size;
  }
  changeConfig()

},[size,color])


  return (
    <div>
        <canvas ref = {canvasRef}></canvas>
    </div>
  )
}

export default Board