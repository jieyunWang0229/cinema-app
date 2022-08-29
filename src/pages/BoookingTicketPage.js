import React,{ Fragment,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../Store/ui-slice";
import CinemaDisplay from "../components/cinema/CinemaDisplay";
import TickeNumberInput from "../components/cinema/TicketNumberInput";
import TicketOrder from "../components/Ticket/TicketOrder";
import SessionDeatil from "../components/Order/SessionDetail";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import classes from './BookingTicketPage.module.css';
import { getMovieDetail } from "../lib/api";
import useHttp from "../hooks/use-http";



const BookingTicketPage =(props)=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(uiActions.startBookingStage());
    },[]);
    const { sendRequest, status, data, error }= useHttp(getMovieDetail, true);
   
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const movieIndex = queryParams.get('movieIndex');
    const sessionId= queryParams.get('sessionId');
    const time = queryParams.get('time');
    const date = queryParams.get('date');
    const movieId = sessionId[0];
    useEffect(()=>{
        sendRequest(movieIndex);
    },[sendRequest]);
    let bookingPage;
    if( status === 'pending'){
        bookingPage = <LoadingSpinner/>
    };

    if(error){
        bookingPage =<p>{error.message}</p>
    };

    if(status === 'completed' && data){
        bookingPage = 
            (<Fragment>
                        <SessionDeatil movieId={movieIndex} time={time} date={date} img={data.img} name={data.name}/>

                        <div className={classes.bkcontainer}>

                            <TickeNumberInput/>
                            <CinemaDisplay sessionId={sessionId} movieId={movieId}/>
                            <TicketOrder movieIndex = {movieIndex} sessionId={sessionId} time={time} date={date} adprice= {data.adprice} conprice={data.conprice} movieName= {data.name}/>

                        </div>
            </Fragment>)
    };
   
    return (
        <Fragment>      
            {bookingPage }
        </Fragment>

        

       

    )
}

export default BookingTicketPage;