import './profileDivs.css';
import React from 'react';
import { logout } from '../services/authService';

function ProfileDivs(){

    const handleLogout = async () => {
        await logout(); // Log out the user
      };

    return(
        <>
        <div className='h-screen w-screen flex flex-row justify-between px-16'>
            <div className='h-2/3 w-1/3 bg-gray-50 div1'>
            <button type='button'  onClick={handleLogout}> Log Out </button>
            </div>
            <div className='h-2/3 w-3/5 bg-gray-50 div1'></div>
        </div>
        </>
    )
}

export default ProfileDivs;