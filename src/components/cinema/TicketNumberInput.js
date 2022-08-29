import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedSeatsActions }from "../../Store/selectedseats-slice";
import classes from "./TicketNumberInput.module.css";

const TickeNumberInput = (props) =>{
    const dispatch = useDispatch();
    const normalTicket = useSelector((state) => state.selectedseats.normalTicket);
    const concessionTicket = useSelector((state) => state.selectedseats.concessionTicket);
  
    const decrementnormalTicketHandler =()=>{        
       if(normalTicket > 0 ){
         dispatch(selectedSeatsActions.decreasenormalTicket());
       }
    }

    const incrementnormalTicketHandler =() =>{
        dispatch(selectedSeatsActions.increasenormalTicket());
    }

    const decrementconcessionTicketHandler =()=>{        
        if(concessionTicket > 0 ){
          dispatch(selectedSeatsActions.decreaseconcessionTicket());
        }
     }
 
     const incrementconcessionTicketHandler =() =>{
         dispatch(selectedSeatsActions.increaseconcessionTicket());
     }


    return (
        <div className={classes.tknocontainer}>
            <div className={classes.tknoheader}> Select Tickets</div>
            <div className={classes.tknoinput}>
                <div className={classes.tktag}>Adult:</div>
                <div className={classes.inputgroup}>
                    <div className={classes.tknobutton}>
                        <button onClick={decrementnormalTicketHandler}>-</button>
                    </div>
                    <div className={classes.tknodisplay}>
                        {normalTicket}
                    </div>
                    <div className={classes.tknobutton}>
                        <button onClick={incrementnormalTicketHandler}>+</button>
                    </div>

                </div>
                
            </div>
            <div className={classes.tknoinput}>
                <div className={classes.tktag}>Concession:</div>
                <div className={classes.inputgroup}>
                    <div className={classes.tknobutton}>
                        <button onClick={decrementconcessionTicketHandler}>-</button>
                    </div>
                    <div className={classes.tknodisplay}>
                        {concessionTicket}
                    </div>
                    <div className={classes.tknobutton}>
                        <button onClick={incrementconcessionTicketHandler}>+</button>
                    </div>

                </div>
               
            </div>
           
        </div>
    )

}

export default TickeNumberInput;