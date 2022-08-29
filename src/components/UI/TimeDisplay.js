import React from 'react';
import classes from "./TimeDisplay.module.css";



const TimeDisplay = ({value,type}) => {
    let number;
    if(value > 9){
        number = value
    }else{
        number = '0' + value;
    }

    return (
        <div className={classes.timedisplay}>
            <div>{number}</div>
            <div>{type}</div>
        </div>
    )
}

export default TimeDisplay;