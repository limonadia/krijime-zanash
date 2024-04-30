import './navbar.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaUser , FaTimes, FaBars} from "react-icons/fa";
import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import ShoppingCart from './shoppingCart';
import cart from '../utilities/cartFunction';



const style = { color: "purple"};

const Navbar = () => {

  const cartnum= cart.length;

  const [cartStatus, setCartStatus] = useState(false);
  const toggleCart = () => {
    setCartStatus(!cartStatus);
  };

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        {/* Navbar */}
        <ShoppingCart  status={cartStatus} closeCart={toggleCart}/>
        <div className='navbar md:flex flex-row justify-between bg-transparent p-2.5 hidden'>
          <div><Link to="/home">Fairies Creations</Link></div>
          <div className='flex flex-row gap-3'>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/contact">Contact</Link>
            <Outlet/>
            <div className='flex cursor-pointer' onClick={toggleCart} >
            <FaShoppingCart style={{color:"purple", height:"20px", width:"20px"}}/>
            <div className='rounded-full flex justify-center items-center text-white w-4 h-4 absolute text-xs translate-x-3/4 translate-y-3/4' style={{backgroundColor:"purple"}}>{cartnum}</div>
            </div>
            <p><FaUser style={{color:"purple", height:"20px", width:"20px"}}/></p>
          </div>
        </div>
  
        {/* Menu */}
        <div className='menu md:hidden block flex flex-col bg-transparent w-screen absolute'>
       <div className='flex flex-row items-end justify-between'> 
       <div className='p-4'><Link to="/home">Fairies Creations</Link></div>
        <div className='flex flex-row'>
        <div className='flex py-4' onClick={toggleCart}>
            <FaShoppingCart style={{color:"purple", height:"20px", width:"20px"}}/>
            <div className='rounded-full flex justify-center items-center text-white w-4 h-4 absolute text-xs translate-x-3/4 translate-y-3/4' style={{backgroundColor:"purple"}}>{cartnum}</div>            
            </div>
          <button className="menu-toggle text-base cursor-pointer" onClick={toggleMenu} style={{color:"white", background:"purple"}}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
          </div>
          <div className='flex'>
        <nav className={`menu-nav ${isOpen ? 'active' : ''}`}>
            <ul className="menu-list list-none p-0 bg-[#7adb5e] w-screen text-center">
            <li className='h'><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <Outlet/>
            </ul>
          </nav>
        </div>
        </div>
        
      </div>
    );
  };
  
  export default Navbar;