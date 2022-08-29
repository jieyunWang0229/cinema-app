import { createSlice } from "@reduxjs/toolkit"; 
 
const orderSlice = createSlice({
   name :'order',
   initialState :{
        movieId:null, 
        movieName:null,
        sessionId:null,
        movieDate:null,
        movieTime:null,
        adTicket:null,
        conTicket:null,
        totalPrice:null,
        orderedTickets:[],
        email:null,
        orderId: null,
   },
   reducers:{
       selectMovieSession(state,action){
         state.movieId = action.payload.movieId;
         state.movieName= action.payload.movieName;
         state.sessionId = action.payload.sessionId;
         state.movieDate = action.payload.movieDate;
         state.movieTime = action.payload.movieTime;
         state.adTicket = action.payload.adTicket;
         state.conTicket = action.payload.conTicket;
         state.totalPrice = action.payload.totalPrice;
        },
        orderTickets(state,action){
            state.orderedTickets = action.payload.orderedTickets;
        },
        cancelOrder(state){
            state.movieId=null;
            state.movieNmae= null;
            state.sessionId=null;
            state.movieDate=null;
            state.movieTime=null;
            state.adTicket=null;
            state.totalPrice=null;
            state.orderedTickets=[];
            state.email=null;
            state.orderId = null;
        },
        setOrderId(state,action){
            state.movieId = action.payload.orderId;

        }

      
   }

});

export const orderActions = orderSlice.actions;
export default orderSlice;