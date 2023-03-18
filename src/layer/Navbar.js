import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className='left-side'>
                <div className='brand'>Job Search BD</div>
            </div>
            <div className='right-side'>
                <ul>
                <Link to='/'>Home</Link>
                    <div className='auth-section'>
                        <Link to='/signup'>Signup</Link>
                        <Link to='/login'>Login</Link>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;