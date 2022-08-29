import React,{ Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getOrder } from "../lib/api";
import Ticket from "../components/Ticket/Ticket";
import { uiActions } from "../Store/ui-slice";
import { orderActions } from "../Store/order-slice";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import Modal from "../components/UI/Modal";
import classes from "./TicketPage.module.css";


const TicketPage = (props) =>{
    const dispatch = useDispatch();
    const navigate =useNavigate();
    const uid = useSelector( state => state.auth.uid);
    const params = useParams();
    const { orderId } = params;
    let ticket;
    const { sendRequest, data, status, error } = useHttp( getOrder, true);
    const closeTicketHandler = () =>{
        navigate(`/`);
        dispatch(uiActions.closeBookingStage())
        dispatch(orderActions.cancelOrder());
    }

    useEffect (()=>{
       
        dispatch(uiActions. closeBookingStage());
        if(uid){
            sendRequest(orderId,uid);
        }else{
            sendRequest(orderId);
        }
    },[orderId,uid]);

    if (error){
        ticket = <p>Network error</p>
    }
    if(status == 'pending'){
        ticket = <LoadingSpinner/>
    }
    if(status == 'completed' && data){
        console.log(data);
        ticket = <Ticket tickets = {data.selectedSeats} time={data.time} date={data.date} sessionId={data.sessionId} movieName={data.movieName}/>
    }

    return (
        <Modal onClick = {closeTicketHandler}>
              <div className={classes.ticketcontainer}>
              {ticket}
              </div>
          
        </Modal>
    )

}

export default TicketPage;

