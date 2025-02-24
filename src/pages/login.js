import '../components/login.css';
import NavBar from "../components/navbar";
import { Outlet, Link } from "react-router-dom";
import '../components/popup.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { signin } from '../services/authService';

function Login(){

    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
      const navigate = useNavigate();

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
            const userData = {
                email: formData.email,
                password: formData.password
              };

              try {
                await signin(userData);
                alert("Logged in successfully!");
                navigate('/home');
              } catch (error) {
                console.error("Error logging in:", error);
              }
    };

    return(
        <>
        <div className="bg h-screen w-screen flex flex-col">
        <NavBar/>
        <div className='flex items-center justify-center pt-32 border-t border-green-600'>
        <div className='bg-white md:w-4/12 w-11/12 flex flex-col rounded-2xl flex flex-col items-center justify-between m-11 p-11'>
        <h1 className='subtitle text-3xl '>Log in</h1>
        <p className='text-xs '>New to Fairies Creations?<Link to="/signup" className='underline text-purple-800'>Sign up for free</Link><Outlet/></p>
        <form className='flex items-left w-full flex-col text-xs text-purple-800' onSubmit={handleSubmit}>
            <p className='float-left'>Email:</p>
            <input type='email' className='border rounded-md w-full h-9' value={formData.email} onChange={handleChange}
            required name='email'></input>
            <p className='float-left'>Password:</p>
            <input type='password' className='border rounded-md w-full h-9'  name='password' value={formData.password}
            required onChange={handleChange}></input>
            <a className='underline hover-container'>Forgot Password?<span class="hover-popup forgot">This component is not finished yet.</span></a>
            <button type='submit' className='loginButton hover-container'>Login<span class="hover-popup">This component is not finished yet.</span></button>
        </form>
        </div>
        </div>
        </div>
        
        </>
    );
}

export default Login;