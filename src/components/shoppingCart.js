import CartItem from "./cartItem";
import Total from "./total";
import  cart  from "../utilities/cartFunction";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import p1 from '../assets/p1.jpg';
import './popup.css';

//  const mycart = cart.length;
// for (let i = 0; i < cart.length; i++) {
//     processData(titles[i], prices[i]);
//   }
function ShoppingCart(props){
    // useEffect(() => {
    //     const itemDiv = document.getElementById('mydiv');
    //       itemDiv.style.display = mycart === 0 ? 'none' : 'block';
        
    //   }, []);
    cart.forEach((item )=> {
        return <CartItem{...item}/>
    })

    return(
        <>
        <div className="cartt w-screen min-h-screen fixed top-0 left-0 z-10 bg-black bg-opacity-30" style={{visibility:props.status ? "visible" : "hidden"}}>
            <div className="md:w-1/4 sm:w-3/4 w-screen bg-white float-right h-screen flex flex-col hover-container">
            <span class="hover-popup sh-cart">This component is not finished yet.</span>
                <div className="justify-between flex flex-row items-center px-3 border-b border-gray-00">
                    <h1 className="text-purple-500">Shopping Cart</h1>
                    <button onClick={props.closeCart}>X</button>
                </div>
                <div id="mydiv">
                    {/* {cart.map(item => {
                        <div> 
                            <CartItem imgpath={item.imgpath} title={item.title} name={item.name} price={item.price} />
                        </div>
                    })} */}
                    <CartItem imgpath={p1} title={"test"} name={"test"} price={12}/>
                </div>
                <div className="h-full mx-auto flex items-center">No products in the cart.</div>
                <div><Total/></div>
                {/* <div className="px-3"><Link to="/shop"><button className="w-full mx-auto" onClick={props.closeCart}>Continue Shopping</button></Link></div><Outlet/>
                 */}
            </div>

        </div>
        </>
    )
}

export default ShoppingCart;