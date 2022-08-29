import React from 'react';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Ticket from "../components/Ticket/Ticket";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import classes from "./MyTicketPage.module.css";
import useHttp from "../hooks/use-http";
import { getTicketsHistory } from "../lib/api";

const MyTicketPage = (props) =>{
    const uid = useSelector( state => state.auth.uid);
    const { sendRequest, status,data, error } = useHttp(getTicketsHistory,true);
    useEffect(()=>{
        sendRequest(uid);
    },[uid]);
    let ticket;
    if (error){
        ticket = <p>Network error</p>
    }
    if(status == 'pending'){
        ticket = <LoadingSpinner/>
    }
    if(status == 'completed' && data){
        ticket = data.map((order,index) =>{
            return order = (
                <div className={classes.ordercontainer} key={index}>
                    <Ticket tickets = {order.selectedSeats} time={order.time} date={order.date} sessionId={order.sessionId} movieName={order.movieName}/>
                </div>
            )
        })
      
    }

    return (
        <div className={classes.ticketscontainer}>
            {ticket}

        </div>

    )
};

export default MyTicketPage;