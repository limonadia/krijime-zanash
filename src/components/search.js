import { FaSearch } from "react-icons/fa";
import './popup.css';

function Search(){
    return(
        
        <>
        
        <div className="pb-12 lg:pr-5 pt-5 w-11/12 hover-container" style={{fontFamily:"Comic Neue"}}>
        <span class="hover-popup">This component is not finished yet.</span>
           <div className="flex flex-row cursor-text">
           <div className=' border border-gray-400 p-2 w-full '>
                <input placeholder='Search...' className="lg:w-32 "/>
            </div>
            <div className="bg-purple-900 items-center w-14 justify-center flex cursor-pointer">
                <FaSearch className=" text-white "/>
            </div>
           </div>
        
        </div>
        </>
    )
}

export default Search;