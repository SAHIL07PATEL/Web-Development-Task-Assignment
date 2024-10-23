import { createSlice } from "@reduxjs/toolkit";
import { users } from "./users";



const userSlice = createSlice({
    name:'users',
    initialState:users,
    reducers:{
        addUsers : (state,action)=>{
            // console.log(state);//[]
            // console.log(action.payload);//{}

            state.push(action.payload)
        },
        // edit : (state,action)=>{},
        // delete : (state,action)=>{}
    }
})
export const {addUsers} = userSlice.actions;
export default userSlice.reducer;