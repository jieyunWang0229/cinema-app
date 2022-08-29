import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./CinemaDisplay.module.css";
import Seats from "./Seats";
import Seat from "./Seat";
import useHttp from "../../hooks/use-http";
import { getSession } from "../../lib/api";
import { render } from "react-dom";
import { uiActions } from "../../Store/ui-slice";



const  CinemaDisplay =(props) =>{
    const tickesNumber = useSelector((state) => state.selectedseats.tickesNumber);
    const reload = useSelector((state)=> state.ui.seatsreload);
    const dispatch = useDispatch();
    const { movieId, sessionId } =props;
    const { sendRequest, status, data, error } = useHttp(getSession, true);
    useEffect(() =>{
        if(reload == true){
            sendRequest(movieId, sessionId);
            dispatch (uiActions.seatsReloadClear());
        }
       
    },[reload, sendRequest, movieId, sessionId ])
      
    

    useEffect(()=>{
        
            sendRequest(movieId, sessionId);
           
            const  timer = setInterval(() =>{
                sendRequest(movieId, sessionId);
                console.log("update");
            }, 50000);
        
       
            return (
                    ()=>{
                            clearInterval(timer);
                        }
        )
    },[sendRequest, movieId, sessionId]);
    let seats;

    if(status === 'completed' && data){
        seats = data;
    }
    
  
  
    return(
        <div className={classes.display}>
            <div className={`${classes.displayheader} ${tickesNumber == 0 ? classes.dark :''}`}>Select Seats</div>
            
            <div className={`${classes.screen} ${tickesNumber == 0 ? classes.dark :''}`}></div>
            <Seats sessionId={props.sessionId} movieId={props.movieId} seatsData ={seats}/>
            <div className={classes.legends}>
                <div className={classes.legend}>
                    <Seat selected={true}/>
                    <span>Selected</span>
                </div>
                <div className={classes.legend}>
                     <Seat/>
                    <span>Available</span>
                </div>
                <div className={classes.legend} >
                    <Seat isReserved={true}/>
                    <span>Taken</span>
                </div>

            </div>
        </div>
    )
}

export default CinemaDisplay;