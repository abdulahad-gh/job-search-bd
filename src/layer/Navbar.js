import { signOut } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../features/Auth/authSlice';
import auth from '../firebaseConfig';

const Navbar = () => {
    const {email} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const handleLogout = () => {
        signOut(auth).then(user => {
            toast.success('logout successfully')
            dispatch(logOut())
            console.log(user)
        })
    }

    return (
        <nav>
            <div className='left-side'>
                <div className='brand'>Job Search BD</div>
            </div>
            <div className='right-side'>
                <ul>
                <Link to='/'>Home</Link>
                    
                        <Link to='/signup'>Signup</Link>
                        {
                            email ? <button onClick={handleLogout}>Logout</button> :
                            <Link to='/login'>Login</Link>
                        }
                 
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;