import { createSlice } from "@reduxjs/toolkit";
import { users } from "../users";



const userSlice = createSlice({
    name:"users",
    initialState:users,
    reducers:{
        addUser : (state,action)=>{
            // console.log(action.payload);
            state.push(action.payload)
        },
        editUser:(state,action)=>{  
            const {id,name} = action.payload;
            const user = state.find((u)=>u.id == id);
            if(user){
                user.name = name;
            }        
        },
        deleteUser:(state,action)=>{
            const {id} = action.payload;
            return state.filter((u)=>u.id !== id);
        }
    }
})


export const {addUser,editUser,deleteUser} = userSlice.actions
export default userSlice.reducer