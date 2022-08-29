import { configureStore } from '@reduxjs/toolkit';

import selectedseatsSlice from './selectedseats-slice';
import uiSlice from './ui-slice';
import orderSlice from './order-slice';
import authSlice from './auth-slice';

const store  = configureStore ({
    reducer:{
        selectedseats: selectedseatsSlice.reducer,
        ui: uiSlice.reducer,
        order: orderSlice.reducer,
        auth:authSlice.reducer

    }

});

export default store;