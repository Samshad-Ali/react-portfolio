import { createSlice } from "@reduxjs/toolkit";


   const hamburgerSlice = createSlice({
    name:'hamburger',
    initialState:{
        stage:false
    },
    reducers:{
        OpenClose:(state,action)=>{
            state.stage?state.stage=false:state.stage=action.payload;
        }
    }
   })

   

   export default hamburgerSlice.reducer;
   export const {OpenClose} = hamburgerSlice.actions;