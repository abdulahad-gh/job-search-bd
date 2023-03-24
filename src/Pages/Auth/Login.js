import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../features/Auth/authSlice';

const Login = () => {
  const {isLoading,email} = useSelector(state => state.auth)
  const {handleSubmit,register,formState:{errors},control} = useForm()
    const password =  useWatch({control,name:'password'})
  const [disabled, setDisabled] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()
useEffect(() => {
if(password !== undefined && password !== ''){
    setDisabled(false)
}else{
    setDisabled(true)
}

}, [password])
useEffect(() => {
  if(!isLoading && email){
    navigate('/')
  }
  


}, [isLoading,email,navigate])

const onSubmit = data => dispatch(loginUser(data))
    return( 
    <div className='form sign-up'>
    <h3>Login</h3>
    <form onSubmit={handleSubmit(onSubmit)}>

      <input placeholder='example@mail.com' type='email' {...register('email',{required:'must field'})} />
      {errors.email && <p role='alert'>{errors.email.message}</p>}
  
      <input placeholder='password' type='password' {...register('password')} />
      <input disabled={disabled} type='submit' value='Login' />
      <p>no Account? <Link to='/signup'>Signup</Link></p>
    </form>
    
  </div>
    );
};

export default Login;