import { configureStore } from "@reduxjs/toolkit";
import jobReducer from '../slice/jobSlice'
export const store = configureStore({
    reducer:{
        jobReducer:jobReducer
    }
})
