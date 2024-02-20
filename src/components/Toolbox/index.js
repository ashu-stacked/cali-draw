import React from 'react';
import cx from "classnames"
import { COLORS, MENU_ITEMS } from '@/constants';
import styles from './index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { brushSizeChosenForVisualMenuItem, colorChosenForVisualMenuItem } from '@/slices/toolBoxSlice';
const Toolbox = () => {
const clickedVisualMenuItem = useSelector((state)=> state.menu.activeVisualChangesMenuItem);
const chosenColor = useSelector((state)=>state.toolBox[clickedVisualMenuItem].color)
const chosenSize = useSelector((state)=>state.toolBox[clickedVisualMenuItem].size)
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
                return <div className = {cx(styles.colorBox, {[styles.active] : color === chosenColor})} style ={{backgroundColor:color}} key={index} onClick = {()=>handleColorClick(color)}/>
            })}</div>
        </div>}
        <div className={styles.brushSizeContainer}>
          <h4 className={styles.brushColorsHeaders}>Sizes</h4>
            <input type="range" min={1} max={10} step ={1} onChange = {(event)=>{handleBrushSize(event.target.value)}} value={chosenSize}/>
        </div>
    </div>
  )
}

export default Toolbox