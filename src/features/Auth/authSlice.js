import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email:'',
    role:null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    
})


export default authSlice.reducer