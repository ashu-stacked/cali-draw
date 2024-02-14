import React from 'react';
import { COLORS, MENU_ITEMS } from '@/constants';
import styles from './index.module.css';
import { useSelector } from 'react-redux';
const Toolbox = () => {
const clickedVisualMenuItem = useSelector((state)=> state.menu.activeVisualChangesMenuItem)

  return (
    <div className={styles.toolBoxContainer}>
        {clickedVisualMenuItem === MENU_ITEMS.PENCIL && <div className={styles.brushColorsContainer}>
          <h4 className={styles.brushColorsHeaders}>Colors - </h4>
          <div className={styles.brushColorsDiv}>{COLORS.map((color,index)=>{
                return <div className = {styles.colorBox} style ={{backgroundColor:color}} key={index}/>
            })}</div>
        </div>}
        <div className={styles.brushSizeContainer}>
          <h4 className={styles.brushColorsHeaders}>Sizes</h4>
            <input type="range" min="0" max="5" step ="1" />
        </div>
    </div>
  )
}

export default Toolbox