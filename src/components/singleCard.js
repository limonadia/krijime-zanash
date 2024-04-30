import CartButton from './cartButton';
import { FaShoppingCart } from "react-icons/fa";
import { formatCurrency } from '../utilities/currencyFormatter';
import { useState } from 'react';

function SingleCard({id, imgpath, title, name, price, atc}){
    const quantity = 0;
    return(
        
        <>
        <div className='flex flex-col w-full text-left p-3' style={{ fontFamily: "'Comic Neue', cursive" }} >
            <div className='inline-block relative'>
                <img src={imgpath} className='object-fill cursor-pointer'></img>
                <button className='absolute top-3 right-3 bg-transparent'><CartButton atc={() => atc(title, imgpath, name, price)} icon={<FaShoppingCart className="text-purple-900 "/>} /></button>
            </div>
            <p className='text-gray-400 text-xs'>{title}</p>
            <p className='font-bold cursor-pointer' >{name}</p>
            <p className='font-bold'>{formatCurrency(price)}</p>
        </div>
        </>
    )
}

export default SingleCard;