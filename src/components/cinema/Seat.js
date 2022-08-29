import React, {useEffect, useState} from "react";
import classes from "./Seat.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectedSeatsActions } from '../../Store/selectedseats-slice';


const Seat = (props) => {
    const { isReserved, row, no, id } = props;
    const dispatch = useDispatch();

    const tickesNumber = useSelector((state) => state.selectedseats.tickesNumber);
    const selectedSeatsIndex = useSelector((state) => state.selectedseats.selectedSeatsIndex);
    const [isSelected, setIsSelected] = useState(false);

    const seatNo = `${row}${no}`;
    
    const seatOnClickHandler =(event)=>{
        if(tickesNumber ==0 ){
            return
        }
        
      
        if( props.isReserved==false && isSelected == false){
          
            setIsSelected(pre => !pre);
            dispatch(selectedSeatsActions.selectedSeats({id: id, seatNo: event.target.innerText})); 
        };
        if(  props.isReserved==false && isSelected == true){
            setIsSelected(pre => !pre);
            dispatch(selectedSeatsActions.cancelSelected({id: id, seatNo: event.target.innerText}));
        };
       
           
    } ;
    useEffect (() =>{
        if(isReserved){
            dispatch(selectedSeatsActions.cancelSelected({id: id, seatNo: seatNo}));
        }
    },[isReserved]);

    useEffect(()=>{
        const selected = selectedSeatsIndex.find(index => index == props.id);
        if(selected){
            setIsSelected(true);
        }
        if(!selected){
            setIsSelected(false);
        }
       
    },[selectedSeatsIndex]);
   
  
    return (
        <div 
            className={`${classes.seat} 
                        ${isReserved== true ? classes.reserved : ''} 
                        ${isSelected== true  ? classes.selected : ''} 
                        ${props.selected? classes.selected : ''} 
                        ${tickesNumber == 0 ? classes.close : ''}`}
            onClick={seatOnClickHandler}
            id={id}>
            {row}
            {no}
        </div>
    )

}

export default Seat;
