import './navbar.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaUser , FaTimes, FaBars} from "react-icons/fa";
import React, { useState } from 'react';


const style = { color: "purple"};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        {/* Navbar */}
        <div className='navbar md:flex flex-row justify-between bg-transparent p-2.5 hidden'>
          <div><a>Fairies Creations</a></div>
          <div className='flex flex-row gap-3'>
            <p>Home</p>
            <p>About</p>
            <p>Shop</p>
            <p>Contact</p>
            <p><FaShoppingCart style={style}/></p>
            <p><FaUser style={style}/></p>
          </div>
        </div>
  
        {/* Menu */}
        <div className='menu md:hidden block bg-transparent flex flex-row flex-col items-end absolute'>
          <button className="menu-toggle text-base cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <nav className={`menu-nav ${isOpen ? 'active' : ''}`}>
            <ul className="menu-list list-none p-0 bg-[#7adb5e] w-screen text-center">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  };
  
  export default Navbar;

// function NavBar(){
//     const [isOpen, setIsOpen] = useState(false);
  
//     const toggleMenu = () => {
//       setIsOpen(!isOpen);
//     };

//     const style = { color: "purple"};

//     return(
//         <>
//         <div className='navbar sm:flex flex-row justify-between bg-transparent p-2.5 hidden'>
//             <div><a>Fairies Creations</a></div>
//             <div className='flex flex-row gap-3'>
//                 <p>Home</p>
//                 <p>About</p>
//                 <p>Shop</p>
//                 <p>Contact</p>
//                 <p><FaShoppingCart style={style}/></p>
//                 <p><FaUser style={style}/></p>
//             </div>
//         </div>

//         <div className='menu sm:hidden block bg-transparent flex flex-col absolute'>
//         <button className="menu-toggle text-base cursor-pointer" onClick={toggleMenu}>
//         {isOpen ? 'Close Menu' : 'Open Menu'}
//         </button>
//         <nav className={`menu-nav ${isOpen ? 'active' : ''}`}>
//         <ul className="menu-list list-none p-0">
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#shop">Shop</a></li>
//         <li><a href="#contact">Contact</a></li>
//         </ul>
//         </nav>
//       </div>

            {/* <div className="navbar bg-transparent absolute flex flex-row justify-between  w-full">
            <a href="#" className="sm:text-lg main inline-block float-left p-2 ">Fairies Creations</a>
                    <ul className="navbar-list inline-block">
                        <li className='nav-link sm:text-lg'><a href="#" className=" float-left p-2 ">Fairies Creations</a></li>    
                    </ul>
                    <ul className="inline-block float-right ">
                        <li><div className='p-0 float-right inline-block w-full'>
                        <li className='sm:text-lg'><a href="#home">Home</a></li>
                        <li className='sm:text-lg'><a href="#about">About</a></li>
                        <li className='sm:text-lg'><a href="#shop">Shop</a></li>
                        <li className='sm:text-lg'><a href="#contact">Contact</a></li>
                        <li className='py-0'><a href="#cart"><FaShoppingCart style={style}/></a></li>
                        <li className='py-0'><a href="#login"><FaUser style={style} /></a></li>
                    </ul>               
                    
            </div> */}
//         </>
//     )
// }

// export default NavBar;