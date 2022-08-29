import React from 'react';
import classes from './DateInput.module.css';

const DateInput = (props) =>{
    
    return(
       <button className ={`${classes.dateinput} ${props.isActive ? classes.active : ""}`} onClick={props.onClick}> {props.day} {props.dateInMonth} {props.month}</button>

    )
};

export default DateInput;
