import '../components/login.css';
import NavBar from "../components/navbar";
import { Outlet, Link } from "react-router-dom";
import '../components/popup.css';

function Login(){
    return(
        <>
        <div className="bg h-screen w-screen flex flex-col">
        <NavBar/>
        <div className='flex items-center justify-center pt-32 border-t border-green-600'>
        <div className='bg-white md:w-4/12 w-11/12 flex flex-col rounded-2xl flex flex-col items-center justify-between m-11 p-11'>
        <h1 className='subtitle text-3xl '>Log in</h1>
        <p className='text-xs '>New to Fairies Creations?<Link to="/signup" className='underline text-purple-800'>Sign up for free</Link><Outlet/></p>
        <form className='flex items-left w-full flex-col text-xs text-purple-800'>
            <p className='float-left'>Email:</p>
            <input type='email' className='border rounded-md w-full h-9'></input>
            <p className='float-left'>Password:</p>
            <input type='password' className='border rounded-md w-full h-9'></input>
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