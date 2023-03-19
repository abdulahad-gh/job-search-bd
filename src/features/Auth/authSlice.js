import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import auth from '../../firebaseConfig'

const initialState = {
    email:'',
    role:null,
    isLoading: false,
    isError: false,
    error: ''
}

export const createUser = createAsyncThunk('auth/createUser',async({email,password})=>{

    const data = await createUserWithEmailAndPassword(auth,email,password)
return data.user.email

})

const authSlice = createSlice({
    name:'auth',
    initialState,
    extraReducers:(builder) =>{
        builder.addCase(createUser.pending,(state,)=>{
state.email = ''
state.isLoading = true
state.isError = false
state.error = ''
        })
        .addCase(createUser.fulfilled,(state,{payload})=>{
state.email = payload
state.isLoading=  false
state.isError = false
state.error = ''
        })
        .addCase(createUser.rejected,(state,action)=>{
            state.email = ''
state.isLoading = false
state.isError = true
state.error = action.error.message
        })
    }
    
})


export default authSlice.reducer