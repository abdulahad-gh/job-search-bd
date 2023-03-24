import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../App.css'

const Register = () => {
    return (
        <div>
            Select One
            <nav>

            <div className='right-side'>

<ul > 

                <li><Link to='/register/candidate'>Candidate</Link></li>
                <li><Link to='/register/employer'>Employer</Link></li>



</ul>
</div>
            </nav>
            
            <Outlet/>
            
        </div>
    );
};

export default Register;