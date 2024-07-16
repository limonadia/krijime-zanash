import './navbar.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaUser , FaTimes, FaBars} from "react-icons/fa";
import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import ShoppingCart from './shoppingCart';
import cart from '../utilities/cartFunction';
import { HiCurrencyDollar } from "react-icons/hi2";
import './popup.css';


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

    const [currencyOpen, setCurrency] = useState(true);
    const toggleCurrency = () => {
      setCurrency(!currencyOpen);
    }
  
    return (
      <div>
        {/* Navbar */}
        <ShoppingCart  status={cartStatus} closeCart={toggleCart}/>
        <div className='navbar md:flex flex-row justify-between bg-transparent p-2.5 hidden h-12'>
          <div><Link to="/home">Fairies Creations</Link></div>
          <div className='flex flex-row gap-3'>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/contact">Contact</Link>
            <Outlet/>
            <div className='flex cursor-pointer hover-container' onClick={toggleCart} >
            <span class="hover-popup navbutton">This component is not finished yet.</span>
            <FaShoppingCart style={{color:"purple", height:"20px", width:"20px"}}/>
            <div className='rounded-full flex justify-center items-center text-white w-4 h-4 absolute text-xs translate-x-3/4 translate-y-3/4' style={{backgroundColor:"purple"}}>{cartnum}</div>
            </div>
            <div className='flex cursor-pointer flex-col h-40 justify-between items-center w-11' onClick={toggleCurrency}>
            <div className='hover-container'><span class="hover-popup navbutton2">This component is not finished yet.</span><HiCurrencyDollar style={{color:"purple", height:"26px", width:"26px"}}/></div>
            <div>
            <ul className="currency-menu list-none bg-[#7adb5e] text-center bg-transparent slide-down" style={{display: currencyOpen? 'none': 'block' }}>
            <li className='border border-gray-500'>USD</li>
            <li className='border border-gray-500'>EUR</li>
            <li className='border border-gray-500'>JPY</li>
            <li className='border border-gray-500'>CAD</li>
            </ul>
            </div>
            </div>
            <div className='flex cursor-pointer'>
            <Link to="/login"><FaUser style={{color:"purple", height:"20px", width:"20px"}}/></Link>
            <Outlet/>
            </div>
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
          <button className="menu-toggle text-base cursor-pointer mr-4" onClick={toggleMenu} style={{color:"white", background:"purple"}}>
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