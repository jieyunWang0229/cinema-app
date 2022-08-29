import React from 'react';
import { Fragment } from "react";
import { useNavigate,NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../Store/ui-slice";
import { authActions } from "../../Store/auth-slice";
import { selectedSeatsActions } from "../../Store/selectedseats-slice";
import { orderActions } from "../../Store/order-slice";
import useHttp from "../../hooks/use-http";
import { cancelSeat } from "../../lib/api";
import classes from "./SecNavigation.module.css";
import TimeCountDown from "../UI/TimeCountDown";

const SecNavigation = (props) =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const orderedSeatsArr = useSelector((state) => state.order.orderedTickets);
    const movieId = useSelector((state) => state.order.movieId);
    const sessionId = useSelector((state) => state.order.sessionId);
    const paystage = useSelector( (state) => state.ui.paystage);
    const isLoggedIn = useSelector( state => state.auth.isLoggedIn);
    const { sendRequest } = useHttp( cancelSeat, true);
    const timeTarget = new Date().getTime() + (15*60*1000);
    
    const openLogFormHander=()=>{
        dispatch(uiActions.toggleLogForm());
    };
    const logoutHandler = () =>{
        dispatch(authActions.logout());
    }

    
    const cancelBookingHandler =async ()=>{
       
        if(orderedSeatsArr.length >0){
            orderedSeatsArr.forEach( seatNo => {
                let rowIndex = seatNo[0].charCodeAt(0) -65 ;
                let seatNoIndex = seatNo[1] -1;
                sendRequest(movieId, sessionId,rowIndex,seatNoIndex);              
            });
                
            

            dispatch(orderActions.cancelOrder());
        }
        dispatch(uiActions.closeBookingStage());
        dispatch(selectedSeatsActions.refreshSelectedSeat());
       
        navigate(`/movies`);
    }

    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.logo}>
                    <NavLink to='/'> BUBO</NavLink>
                </div>
            
                <div className={classes.login} >
                    {!isLoggedIn && <button onClick={openLogFormHander}>Login </button>}
                    {isLoggedIn && <button onClick={logoutHandler}>Logout </button>}
            
                </div>

            </header>
            <div className={classes.cancel}>
                <button onClick={cancelBookingHandler}>Cancel</button>
            </div>
            {paystage && <TimeCountDown tartgetTime={timeTarget} cancelOrder={cancelBookingHandler}/>}
        </Fragment>
    )

}

export default SecNavigation;