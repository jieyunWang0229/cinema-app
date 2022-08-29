import { selectedSeatsActions } from "./selectedseats-slice";
import { uiActions } from "./ui-slice";
import { orderActions } from "./order-slice";
import { updateSeat,checkSeat } from "../lib/api";



export const sendOrderData = (movieId, sessionId, seatArr) =>{

    return async (dispatch ) =>{
       
        let orderedseats = [];
  

        const checkEach= async () => {  
              for(const seatNo of seatArr) {                                 
                let rowIndex = seatNo[0].charCodeAt(0) -65 ;
                let seatNoIndex = seatNo[1] -1;
                let seatId = (seatNoIndex +1) + (rowIndex*6);
                let data =await checkSeat( movieId,sessionId,rowIndex,seatNoIndex, seatNo, seatId);
                if( data == true){
                    dispatch(selectedSeatsActions.cancelSelected({id:seatId, seatNo:seatNo}));
                    window.alert(seatNo + "sold out");
                    dispatch(uiActions.seatsReload());
                    dispatch(uiActions.clearPending());
                };
                if( data == false){
                   orderedseats.push({
                        rowIndex,
                        seatNoIndex,
                        seatNo
                   })
                };

            };
            return orderedseats;
        };
        dispatch(uiActions.setPending());
        let result =await checkEach();

        if( result.length === seatArr.length){
            console.log(result);
            let orderedTickets=[];
            for ( const key of result){
                orderedTickets.push(key.seatNo);
               
                updateSeat(movieId, sessionId, key.rowIndex, key.seatNoIndex);
            }
            dispatch(orderActions.orderTickets({ orderedTickets: orderedTickets}));
            dispatch(uiActions.clearPending());
            return true;
        }else{
            orderedseats = [];
            return false;
        }


        
    };

};