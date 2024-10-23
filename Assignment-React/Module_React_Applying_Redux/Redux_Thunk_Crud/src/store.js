import { configureStore } from "@reduxjs/toolkit";
import userDetail from './fetures'


export const storeData = configureStore({
    reducer:{
       app:userDetail,
    }
})