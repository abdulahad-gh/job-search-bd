import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import '../../App.css'
import { createUser } from '../../features/Auth/authSlice';
import { useSaveUserMutation } from '../../features/Auth/authApi';
import { toast } from 'react-hot-toast';


const Signup = () => {

  const {handleSubmit,reset,register,formState:{errors},control} = useForm()
const password = useWatch({control,name:'password'})
const confirmPassword = useWatch({control,name:'confirmPassword'})
const [disabled, setDisabled] = useState(true)
const navigate = useNavigate()
const {email} = useSelector(state => state.auth)

const [saveUser,{isLoading,isError,isSuccess,error}] = useSaveUserMutation()
const dispatch = useDispatch()
useEffect(()=>{
if(password !== undefined && password !== "" && confirmPassword !== undefined && confirmPassword !== '' && password === confirmPassword){
setDisabled(false)
}else{
setDisabled(true)
}
},[password,confirmPassword])

useEffect(()=>{
  if(email){
    navigate('/')
  }
},[email,navigate])

  const onSubmit = data => {
    saveUser(data)
    dispatch(createUser(data))
    reset()
 


  }
    return (
        <div className='form sign-up'>
          <h3>Create Account</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='firstname' type='text' {...register('firstName',{required:"first name don't blank!",maxLength:20})} />
            {errors.firstName && <p role='alert'>{errors.firstName.message}</p>}
            <input placeholder='lastname' type='text' {...register('lastName',{required:"last name don't blank!", maxLength:20})} />
            {errors.lastName && <p role='alert'>{errors.lastName.message}</p>}
            <input placeholder='example@mail.com' type='email' {...register('email',{required:'must field'})} />
            {errors.email && <p role='alert'>{errors.email.message}</p>}
            <select {...register('gender')}>  
              <option value='male'>male</option>
              <option value='female'>female</option>
              <option value='other'>other</option>
            </select>
            <input placeholder='password' type='password' {...register('password')} />
            <input  placeholder='confirmPassword' type='password' {...register('confirmPassword')} />
            <input disabled={disabled} type='submit' value='signup' />
            <p>already Account? <Link to='/login'>Login</Link></p>
          </form>
          
        </div>
    );
};

export default Signup;