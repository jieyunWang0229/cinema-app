 import { createSlice } from "@reduxjs/toolkit"; 
 
 const uiSlice = createSlice({
    name :'ui',
    initialState :{
        seatsreload: false,
        pending:false,
        bookingstage: false,
        paystage: false,
        logformIsVisible: false,
    },
    reducers:{
        seatsReload(state){
            state.seatsreload = true;
        },
        seatsReloadClear(state){
            state.seatsreload= false;
        },
        setPending(state){
            state.pending = true;
        },
        clearPending(state){
            state.pending = false;
        },
        startBookingStage(state){
            state.bookingstage = true;
        },
        closeBookingStage(state){
            state.bookingstage = false;
            state.paystage = false;
        },
        startpayStage(state){
            state.paystage= true;
        },
        toggleLogForm(state){
            state.logformIsVisible = !state.logformIsVisible;
        },

    }

 });

 export const uiActions = uiSlice.actions;
 export default uiSlice;