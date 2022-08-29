import React from 'react';
import TimeDisplay from "./TimeDisplay";
import { useCountdown } from "../../hooks/use-countdown";
import classes from './TimeCountDown.module.css'

const TimeCountDown = (props) =>{
    const [minutes,seconds] = useCountdown(props.tartgetTime);
    if(minutes < 1 && seconds < 1){
        props.cancelOrder();
    } 
    return (
        <div className={classes.timecontainer}>
           <div>Time:</div>
           <TimeDisplay value={minutes} type={': '}/>
           <TimeDisplay value={seconds} type={""}/>
        </div>
    )

}

export default TimeCountDown;