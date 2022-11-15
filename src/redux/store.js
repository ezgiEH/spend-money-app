import { configureStore } from '@reduxjs/toolkit';
import SpendSlice from './Spend/SpendSlice';


export const store = configureStore({
    reducer:{
        spend: SpendSlice
    }
})
