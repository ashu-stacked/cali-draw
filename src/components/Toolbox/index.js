import React from 'react';
import { COLORS } from '@/constants';
import styles from './index.module.css';
const Toolbox = () => {
  return (
    <div className={styles.toolBoxContainer}>
        <div className={styles.brushColorsContainer}>
          <h4 className={styles.brushColorsHeaders}>Brush Colors - </h4>
          <div className={styles.brushColorsDiv}>{COLORS.map((color,index)=>{
                return <div className = {styles.colorBox} style ={{backgroundColor:color}} key={index}/>
            })}</div>
        </div>
        <div className={styles.brushSizeContainer}>
          <h4 className={styles.brushColorsHeaders}>Brush Sizes - </h4>
            <input type="range" min="0" max="5" step ="1" />
        </div>
    </div>
  )
}

export default Toolbox