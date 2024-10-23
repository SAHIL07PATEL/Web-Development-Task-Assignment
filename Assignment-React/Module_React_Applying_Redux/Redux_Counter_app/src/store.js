import { configureStore } from "@reduxjs/toolkit";
import {counterReducer} from "./reducer"; // Ensure default import

export const storeData = configureStore({
    reducer: {
        counter: counterReducer
    }
});
