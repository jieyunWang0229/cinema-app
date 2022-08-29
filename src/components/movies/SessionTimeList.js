import React, { useState, useEffect } from "react";
import classes from "./SessionTimeList.module.css";
import SessionTime from "./SessionTime";

const SessionTimeList = (props)=>{
    const { date,sessionData } = props;
 
    let sessionTimeData;
    let sessions;
    let sessionList;
    if( date ){
       sessionData.forEach(data =>{
            if( date == data.date){
                return sessionTimeData=data;
            };
        })
    };
  
    if( sessionTimeData) {
        sessions = sessionTimeData.sessions? sessionTimeData.sessions:null ;
    
    };
    if(sessions){

        sessionList = sessions.map((session,index) =>{
             return ( <SessionTime key={index} time={session.time} id={session.id} movieId={props.movieId} movieIndex={props.movieIndex} date={date}/>)
        })
    }





    return (
        <div className={classes.timelistcontainer}>
            <div className={classes.timelistheader} >
                Session Time:
            </div>
            <div className={classes.timelist}>
                 {sessionList}
            </div>
          
        </div>

    )
}

export default SessionTimeList;