import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from './slice'

export const store = configureStore({
    reducer:{
        hamburgerSlice
    }
})