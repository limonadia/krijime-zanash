import SingleCard from './singleCard';
import cards from "../data/cards.json";
import { addToCart } from '../utilities/cartFunction';

function Cards() {
    
    return(

        <>
        
        <div className='bg-transparent w-screen my-24 justify-center content-center flex'>
        <div className='flex md:flex-row flex-col justify-between w-9/12' >
            {cards.map(item => (
            <div key = {item.id}><SingleCard atc={addToCart} {...item}/></div>
            ))}
        </div>
        </div>
    </>
    )
}

export default Cards;