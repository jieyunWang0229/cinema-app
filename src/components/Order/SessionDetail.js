import React from 'react';
import { useEffect, Fragment } from 'react';
import classes from './SessionDetail.module.css';
import LoadingSpinner from '../UI/LoadingSpinner';
import useHttp from '../../hooks/use-http';
import { getMovieDetail } from '../../lib/api';


const SessionDeatil = (props) =>{
    const { movieId,img, name } =props;
    const dayOfWeek =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months =['Jan','Feb','Mar','Apr','May','June', 'Jul','Aug','Sep','Oct','Nov','Dec']; 
    const date =  props.date;
    
    const day = dayOfWeek[new Date(date).getDay()];
    const dateInMonth = new Date(date).getDate();
    const month =months[new Date(date).getMonth()];
    
    
   
    return (
        <div className={classes.sdcontanier}>
              <div className={classes.sdpic}>
                            <img src={img}></img>
                        </div>
                        <div className={classes.sdinfo}>
                            <div className={classes.sdname}>{name}</div>
                            <div>{day}  {dateInMonth}  {month}</div>
                            <div>{props.time}</div>
                        </div>
           
        </div>
    )
}

export default SessionDeatil;