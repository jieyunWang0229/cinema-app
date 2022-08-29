import { createSlice } from "@reduxjs/toolkit";

const selectedseatsSlice = createSlice({
    name :'selectedseats',
    initialState :{
        normalTicket:0,
        concessionTicket:0,
        tickesNumber:0,
        selectedSeatsIndex:[],
        selectedSeatsNo:[]
    },
    reducers:{
        increasenormalTicket(state){
            state.normalTicket = state.normalTicket +1;
            state.tickesNumber = state.concessionTicket + state.normalTicket;
        },
        decreasenormalTicket(state){
            state.normalTicket = state.normalTicket -1;
            state.tickesNumber = state.concessionTicket + state.normalTicket;
        },
        increaseconcessionTicket(state){
            state.concessionTicket = state.concessionTicket +1;
            state.tickesNumber = state.concessionTicket + state.normalTicket;
        },
        decreaseconcessionTicket(state){
            state.concessionTicket = state.concessionTicket -1;
            state.tickesNumber = state.concessionTicket + state.normalTicket;
        },
        
        selectedSeats(state, action){
             state.selectedSeatsIndex.push(action.payload.id);
             state.selectedSeatsNo.push(action.payload.seatNo);
        },
        cancelFirstSelected(state){
            state.selectedSeatsIndex.shift();
            state.selectedSeatsNo.shift()

        },
        cancelSelected(state,action){
            const id = action.payload.id;
            const seatNo = action.payload.seatNo;
            state.selectedSeatsIndex = state.selectedSeatsIndex.filter(idx  => idx !== id);
            state.selectedSeatsNo = state.selectedSeatsNo.filter(no => no !==  seatNo);
        },
        refreshSelectedSeat(state){
            state.normalTicket=0;
            state.concessionTicket=0;
            state.tickesNumber=0;
            state.selectedSeatsIndex=[];
            state.selectedSeatsNo=[]
        }

    }

});

export const selectedSeatsActions = selectedseatsSlice.actions;

export default selectedseatsSlice;
