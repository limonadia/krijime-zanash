import { FaSearch } from "react-icons/fa";

function Search(){
    return(
        
        <>
        
        <div className="pb-12 pr-5 pt-5 " style={{fontFamily:"Comic Neue"}}>
           <div className="flex flex-row w-11/12 cursor-text">
           <div className=' border border-gray-400 p-2 w-full '>
                <input placeholder='Search...' className="lg:w-32 "/>
            </div>
            <div className="bg-purple-900 items-center w-14 justify-center flex ml-3 cursor-pointer">
                <FaSearch className=" text-white "/>
            </div>
           </div>
        
        </div>
        </>
    )
}

export default Search;