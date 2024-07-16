import '../components/login.css';
import '../components/popup.css';
import NavBar from "../components/navbar";
import { Outlet, Link } from "react-router-dom";
import bg from "../assets/bg2.jpg";

function SignUp() {
    return (
        <>
            <NavBar className="border-b" />
            <div className='flex md:flex-row flex-col h-screen w-screen border-t' style={{backgroundImage:`url(${bg})`}}>
                <div className='md:w-6/12 md:h-full w-full h-24 bg'></div>
                <div className='md:w-6/12 w-full'>
                    <div className='flex flex-col justify-between items-center p-12 py-36'>
                        <h1 className='subtitle text-3xl bg-white '>Create an account</h1>
                        <p className='text-xs bg-white'>Already have an account?<Link to="/login" className='underline text-purple-800'>Log in</Link><Outlet /></p>
                        <form className='flex items-left w-full flex-col text-xs text-purple-800'>
                            <p className='float-left'>Username:</p>
                            <input type='text' className='border rounded-md w-full h-9'></input>
                            <p className='float-left'>Email:</p>
                            <input type='email' className='border rounded-md w-full h-9'></input>
                            <p className='float-left'>Password:</p>
                            <input type='password' className='border rounded-md w-full h-9'></input>
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