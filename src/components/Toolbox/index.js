import React from 'react';
import { COLORS, MENU_ITEMS } from '@/constants';
import styles from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { brushSizeChosenForVisualMenuItem, colorChosenForVisualMenuItem } from '@/slices/toolBoxSlice';
const Toolbox = () => {
const clickedVisualMenuItem = useSelector((state)=> state.menu.activeVisualChangesMenuItem)
const dispatch = useDispatch();

const handleBrushSize =(size) =>{
  dispatch(brushSizeChosenForVisualMenuItem({item:clickedVisualMenuItem,size:size}))
}

const handleColorClick = (color)=>{
  dispatch(colorChosenForVisualMenuItem({item:clickedVisualMenuItem,color:color}))
}

  return (
    <div className={styles.toolBoxContainer}>
        {clickedVisualMenuItem === MENU_ITEMS.PENCIL && <div className={styles.brushColorsContainer}>
          <h4 className={styles.brushColorsHeaders}>Colors - </h4>
          <div className={styles.brushColorsDiv}>{[...COLORS.slice(0,-1)].map((color,index)=>{
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