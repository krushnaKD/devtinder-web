import { createSlice } from "@reduxjs/toolkit";

const coonectionSlice = createSlice({
    name:"connections",
    initialState:null,
    reducers:{
        ShowConnection: (state,action)=> action.payload,
        removeConnection: (state,action)=> null
    }
})


export const {ShowConnection,removeConnection} = coonectionSlice.actions;

export default  coonectionSlice.reducer