import React from 'react';
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import Modal from "../UI/Modal";
import classes from "./Ticket.module.css";
import Barcode from "react-barcode";
import { BiX } from "react-icons/bi";
import { uiActions } from "../../Store/ui-slice";
import { orderActions } from "../../Store/order-slice";


const Ticket = (props) => {
    const { tickets,date,time,sessionId,movieName } = props;
    const dispatch = useDispatch();
  
    console.log(tickets);
    let items = tickets.map((ticket,index) => {
        let row = ticket[0];
        let seatNum = ticket[1];
        let days = date.split("-");
        let day = days[1]+"/" +days[2];

        return ticket = (
            <div className={classes.ticket} key={index}>

            <div className={classes.ticketrow}>
        
                <div className={classes.ticketsmall}>
                    <div className={classes.tickettag}>Date</div>
                    <div className={classes.ticketvalue}>{day}</div>
                </div>
                <div className={classes.ticketsmall}>
                    <div className={classes.tickettag}>Time</div>
                    <div className={classes.ticketvalue}>{time}</div>
                </div>
            
    
              
                    <div className={classes.ticketsmall}>
                        <div className={classes.tickettag}>ROW</div>
                        <div className={classes.ticketvalue}>{row}</div>
                    </div>
                    <div className={classes.ticketsmall}>
                        <div className={classes.tickettag}>SEAT</div>
                        <div className={classes.ticketvalue}>{seatNum}</div>
                    </div>
                </div>   
                <Barcode value={`${sessionId}${row}${seatNum}`} background= "#fffce3" height={50} width={1.5} displayValue={false}/>
              
            </div>

        )
    })
 

    
    return (
       
           <Fragment>
                   
                    <div className={classes.tickettitle}>
                        <div>{movieName}</div>
                    </div>
                    {items}
            </Fragment>        
          

    )
}

export default Ticket;