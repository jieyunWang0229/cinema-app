import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import Seat from "./Seat";
import classes from './Seats.module.css';
import { selectedSeatsActions } from '../../Store/selectedseats-slice';

/*const  seatsData= [
    [{id: 1, number: 1,isReserved: false}, {id: 2, number: 2,isReserved: false}, {id: 3, number: '3', isReserved: false }, {id: 4, number: '4',isReserved: true}, {id: 5, number: 5,isReserved: true}, {id: 6, number: 6,isReserved: false}],
    [{id: 7, number: 1, isReserved: false}, {id: 8, number: 2, isReserved: false},{id: 9, number: '3', isReserved: false }, {id: 10, number: '4',isReserved: true}, {id: 11, number: 5,isReserved: true}, {id: 12, number: 6,isReserved: false}],
    [{id: 13, number: 1, isReserved: false}, {id: 14, number: 2, isReserved: false}, {id: 15, number: 3, isReserved: false}, {id: 16, number: '4', isReserved: true},  {id: 17, number: 5, isReserved: true}, {id: 18, number: 6, isReserved: false}],
    [{id: 19, number: 1,isReserved: false}, {id: 20, number: 2,isReserved: false}, {id: 21, number: 3,isReserved: false }, {id: 22, number: '4',isReserved: true}, {id: 23, number: 5,isReserved: true}, {id: 24, number: 6,isReserved: false}],
    [{id: 25, number: 1, isReserved: false}, {id: 26, number: 2,isReserved: false}, {id: 27, number: '3', isReserved: false}, {id: 28, number: '4',isReserved: true},{id: 29, number: 5,isReserved: true}, {id: 30, number: 6, isReserved: false}]
]
*/ 

const Seats =(props) =>{
    const { seatsData } =props;
    let seats;
    const dispatch = useDispatch();
   
    const tickesNumber = useSelector((state) => state.selectedseats.tickesNumber);
    const selectedSeatsIndex = useSelector((state) => state.selectedseats.selectedSeatsIndex);
    if(seatsData){
    
           seats = seatsData.map( (seatrow,index) =>{
                const rowNo = String.fromCharCode(index + 'A'.charCodeAt(0));

                return(
                    <div  className={classes.seatsrow} key={rowNo}>
                        {seatrow.map(seat => {
                        return <Seat
                                    key = {seat.id}
                                    id = {seat.id}
                                    row={rowNo}
                                    no={seat.number}
                                    isReserved ={seat.isReserved}    
                                    />    
                        })}
                    </div>
                )
            });
    }


    useEffect(()=>{
        const selectedSeatsQuantity = selectedSeatsIndex.length;
        const id=selectedSeatsIndex[0];
        if(tickesNumber<selectedSeatsQuantity ){
            const seat = document.getElementById(id);
            seat.classList.remove('Seat_selected__FPj0G');
            dispatch(selectedSeatsActions.cancelFirstSelected());
    

        }
    },[tickesNumber,selectedSeatsIndex,dispatch])

   

    return (
        <div className={classes.seatsarea}>
            {seats}
        </div>

    )

}
 export default Seats;