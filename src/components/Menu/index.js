import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { faPencil, faEraser, faRotateLeft, faRotateRight, faDownload } from '@fortawesome/free-solid-svg-icons'
import styles from './index.module.css'
import { MENU_ITEMS } from '@/constants';
import { useDispatch } from 'react-redux';
import { visualMenuItemClick } from '@/slices/menuSlice';
const Menu = () => {
const dispatch = useDispatch()
const clickedVisualMenuItem = useSelector((state)=> state.menu.activeVisualChangesMenuItem);
 const handleClick =(menuItem)=>{
  dispatch(visualMenuItemClick(menuItem))
 }

  return (
    <div className ={styles.menuContainer}>
        <div className ={cx(styles.iconWrapper, {[styles.active] : clickedVisualMenuItem === MENU_ITEMS.PENCIL})} onClick={()=> handleClick(MENU_ITEMS.PENCIL)}>
            <FontAwesomeIcon icon={faPencil} className={styles.icon}/>
        </div>
        <div className ={cx(styles.iconWrapper , {[styles.active]: clickedVisualMenuItem === MENU_ITEMS.ERASER})} onClick={()=> handleClick(MENU_ITEMS.ERASER)}>
            <FontAwesomeIcon icon={faEraser} className={styles.icon}/>
        </div>
        <div className ={styles.iconWrapper}>
            <FontAwesomeIcon icon={faRotateLeft} className={styles.icon}/>
        </div>
        <div className ={styles.iconWrapper}>
            <FontAwesomeIcon icon={faRotateRight} className={styles.icon}/>
        </div>
        <div className ={styles.iconWrapper}>
            <FontAwesomeIcon icon={faDownload} className={styles.icon}/>
        </div>
    </div>
  )
}

export default Menu