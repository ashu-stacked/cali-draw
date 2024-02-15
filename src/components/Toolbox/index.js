import React from 'react';
import { COLORS, MENU_ITEMS } from '@/constants';
import styles from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { brushSizeChosen, colorChosen } from '@/slices/toolBoxSlice';
const Toolbox = () => {
const clickedVisualMenuItem = useSelector((state)=> state.menu.activeVisualChangesMenuItem)
const dispatch = useDispatch();

const handleBrushSize =(size) =>{
  dispatch(brushSizeChosen(size))
}

const handleColorClick = (color)=>{
  console.log(color)
  dispatch(colorChosen(color))
}

  return (
    <div className={styles.toolBoxContainer}>
        {clickedVisualMenuItem === MENU_ITEMS.PENCIL && <div className={styles.brushColorsContainer}>
          <h4 className={styles.brushColorsHeaders}>Colors - </h4>
          <div className={styles.brushColorsDiv}>{COLORS.map((color,index)=>{
                return <div className = {styles.colorBox} style ={{backgroundColor:color}} key={index} onClick = {()=>handleColorClick(color)}/>
            })}</div>
        </div>}
        <div className={styles.brushSizeContainer}>
          <h4 className={styles.brushColorsHeaders}>Sizes</h4>
            <input type="range" min="0" max="5" step ="1" onClick = {(event)=>{handleBrushSize(event.target.value)}}/>
        </div>
    </div>
  )
}

export default Toolbox