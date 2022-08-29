import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './TicketOrder.module.css';
import useHttp from '../../hooks/use-http';
import LoadingSpinner from '../UI/LoadingSpinner';
import {  getMovieDetail,checkSeat } from '../../lib/api';
import { useDispatch } from 'react-redux';
import { selectedSeatsActions } from '../../Store/selectedseats-slice';
import { sendOrderData } from '../../Store/order-action';
import { orderActions } from '../../Store/order-slice';

const TicketOrder =(props) =>{
    const [totalPrice, setTotalPrice]= useState(0);
    const { sessionId, date, time, movieIndex, paymentPage, adprice, conprice, movieName } =props;
    const seatArr = useSelector((state) => state.selectedseats.selectedSeatsNo);
    const adTicket = useSelector((state) => state.selectedseats.normalTicket);
    const conTicket = useSelector((state) => state.selectedseats.concessionTicket);
    const tickesNumber = useSelector((state) => state.selectedseats.tickesNumber);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { sendRequest,status, data } = useHttp(checkSeat, true);
    
    useEffect(()=>{
        setTotalPrice ((adTicket * adprice) + (conTicket * conprice));
    },[adTicket,adprice,conTicket,conprice]);

    let seatNo;
    if(seatArr.length > 0){
        seatNo = seatArr.map((seat,index)=> {
                            return  <span key={index}>{seat}</span>});
    };
    const check = ()=>{
        if(status == 'completed' && data == false){
            return true
        }
        if(status == 'completed' && data == true){
            return false
        }
    };

    const orderTicketHandler= async (event) =>{
        event.preventDefault();
        if(seatArr.length !== tickesNumber){
            return
        }
       
        let movieId = sessionId[0]; 
       
        dispatch(orderActions.selectMovieSession({
            movieId:movieId,
            movieName: movieName,
            sessionId:sessionId,
            movieDate:date,
            movieTime:time,
            adTicket:adTicket,
            conTicket:conTicket,
            totalPrice:totalPrice,
        }))
        let result = await dispatch(sendOrderData(movieId,sessionId,seatArr)) ;
        if(result == true) {
            navigate(`/movie-purchase?movieId=${movieIndex}&sessionId=${sessionId}&time=${time}&date=${date}`)
        } ;
        if(result == false){
            dispatch(orderActions.cancelOrder());
        }
                 
    };
    
    
             

    return(
        <div className={classes.tkocontainer}>
            <div className={classes.tkoheader}>Tickets</div>
            <form className={classes.tkocontent}>
                <table className={classes.tkotkgroup}>
                    <tbody>
                    <tr className={classes.tkotk}>
                        <td>Adult</td>
                        <td>X{adTicket}</td>
                        <td>${adprice}</td>
                    </tr>
                    { conTicket> 0 && <tr className={classes.tkotk}>
                        <td>Concession</td>
                        <td>X{conTicket}</td>
                        <td>${conprice}</td>
                    </tr>}
                    </tbody>
                </table>
                <div className={classes.tkoseats}>
                    <div className={classes.tkoseatsheader}>Seats</div>
                    <div className={classes.tkoseatsicon}>{seatNo}</div>
                </div>
                <div className={classes.tkopricesummary}>
                    <div>Total Price</div>
                    <div>${totalPrice}</div>
                </div>
                <div className={classes.tkobtn} >
                    { !paymentPage && <button className={`${seatArr.length !== tickesNumber ? classes.dark : ''}`}
                             onClick={orderTicketHandler}>CHECK OUT</button>}
                  
                </div>
            </form>
            

        </div>
    )
}

export default TicketOrder;