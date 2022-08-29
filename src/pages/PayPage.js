import React,{ Fragment, useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import TicketOrder from "../components/Ticket/TicketOrder";
import SessionDeatil from "../components/Order/SessionDetail";
import PaymentInput from "../components/Order/PaymentInput";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import classes from "./PayPage.module.css";
import { getMovieDetail } from "../lib/api";
import useHttp from "../hooks/use-http";
import Ticket from "../components/Ticket/Ticket";
import TimeCountDown from "../components/UI/TimeCountDown";
import { uiActions } from "../Store/ui-slice";



const PayPage = (props) =>{
    const dispatch = useDispatch();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const movieIndex = queryParams.get('movieId');
    const sessionId= queryParams.get('sessionId');
    const time = queryParams.get('time');
    const date = queryParams.get('date');
    const movieId = sessionId[0];
    dispatch(uiActions.startpayStage());
    

    const { sendRequest, status, data, error }= useHttp(getMovieDetail, true);
    useEffect(()=>{
       
        sendRequest(movieIndex);
      
    },[sendRequest]);
 

    let payPage;
    if( status === 'pending'){
        payPage = <LoadingSpinner/>
    };

    if(error){
        payPage =<p>{error.message}</p>
    };

    if(status === 'completed' && data){


      
        payPage = 
            (<Fragment>
              
                <SessionDeatil movieId={movieIndex} time={time} date={date} img={data.img} name={data.name}/>
                <div className={classes.paymentcontainer}>
                    <PaymentInput sessionId={sessionId} time={time} date={date}/>
            
                    <TicketOrder sessionId={sessionId} time={time} date={date} paymentPage = {true} adprice= {data.adprice} conprice={data.conprice}/>

                </div>
                      
            </Fragment>)
    };


    return(
            <Fragment>
                    {payPage}
                   
                
            </Fragment>

    )
};

export default PayPage;