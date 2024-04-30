import Categories from "../components/categories";
import Filter from "../components/filter";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Search from "../components/search";
import Dropdown from 'react-dropdown';
import '../components/dropdown.css';
import SingleCard from '../components/singleCard';
import storeItems from "../data/items.json";
import { addToCart } from "../utilities/cartFunction";


function Shop(){

    const options = [
        'Default sorting', 'Sort by popularity', 'Sort by average rating', 'Sort by latest', 'Sort by price:low to high', 'Sort by price:high to low '
      ];
      const defaultOption = options[0];

    return(
      <>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Rubik+Scribble&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
        </style>
        <NavBar/>
  <div className="flex lg:flex-row flex-col w-screen border-t border-b border-gray-400 px-22 py-11" style={{fontFamily:"Comic Neue"}}>
    <div className="hidden lg:contents">
    <div className='lg:w-1/4 w-screen border-r border-gray-400 flex flex-col mx-8'>
      <Search/>
      <Filter/>
      <Categories/>
    </div>
    </div>

    <div className='lg:w-3/4 w-screen p-8'>
      <div className='flex flex-col'>
      <p className='py-2 my-2 text-gray-400 text-base'>Home/Shop</p>
      <p className='text-7xl text-indigo-900 mb-16' >Shop</p>
      <div className='flex md:flex-row flex-col justify-between mb-4'>
        <p className='float-left'>Showing all 12 results</p>
        <div className='float-right'>
        <Dropdown options={options}  value={defaultOption} placeholder="Select an option"/>
        </div>
      </div>
      <div></div>

        <div className="grid md:grid-cols-3">
          {storeItems.map(item=> {
            return <div key={item.id}><SingleCard atc={addToCart} {...item}/></div>
          })}
        </div>
        </div> 
      <div className="contents lg:hidden">
      <div className='lg:w-1/4 w-full lg:border-r lg:border-gray-400 flex flex-col '>
      <Search/>
      <Filter/>
      <Categories/>
      </div>
      </div>
    </div>
    </div>
    <Footer/>
      </>
    )
}

export default Shop;
