import React from 'react'
import classes from './Backdrop.module.css'

// Затемненное поле при нажатии на эконку меню
const Backdrop = props => <div className={classes.Backdrop} onClick={props.onClick} />

export default Backdrop