import '../components/login.css';
import '../components/popup.css';
import NavBar from "../components/navbar";
import { Outlet, Link } from "react-router-dom";
import bg from "../assets/bg2.jpg";
import React, { useState } from 'react';
import { signup } from '../services/authService';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const userData = {
          name: formData.name,
          email: formData.email,
          password: formData.password
        };
      
        try {
          await signup(userData);
          alert("Account created successfully!");
          navigate('/login');
        } catch (error) {
          console.error("Signup error:", error);
        }
      };

    return (
        <>
            <NavBar className="border-b" />
            <div className='flex md:flex-row flex-col h-screen w-screen border-t' style={{backgroundImage:`url(${bg})`}}>
                <div className='md:w-6/12 md:h-full w-full h-24 bg'></div>
                <div className='md:w-6/12 w-full'>
                    <div className='flex flex-col justify-between items-center p-12 py-36'>
                        <h1 className='subtitle text-3xl bg-white '>Create an account</h1>
                        <p className='text-xs bg-white'>Already have an account?<Link to="/login" className='underline text-purple-800'>Log in</Link><Outlet /></p>
                        <form className='flex items-left w-full flex-col text-xs text-purple-800' onSubmit={handleSubmit}>
                            <p className='float-left'>Name:</p>
                            <input type="text" name="name" onChange={handleChange} required />
                            <p className='float-left'>Email:</p>
                            <input type='email' className='border rounded-md w-full h-9' name="email" placeholder="Email" onChange={handleChange} required></input>
                            <p className='float-left'>Password:</p>
                            <input type='password' className='border rounded-md w-full h-9' name="password" placeholder="Password" onChange={handleChange} required></input>
                            <p className='text-xs text-gray-400'>Use 8 or more characters with a mix of letters, numbers & symobls.</p>
                            <button type='submit' className='loginButton hover-container'>Create an account<span class="hover-popup">This component is not finished yet.</span></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;