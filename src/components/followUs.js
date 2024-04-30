import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function FollowUs(){

    return(
        <>
        <div className="p-10 flex flex-col">
            <h1 className="text-xl font-medium mb-4">Follow Us:</h1>
            <div className="flex flex-row ">
                <div className=" bg-purple-900 rounded-full text-white w-8 h-8 p-2 mx-1">
                    <FaInstagram/>
                </div>
                <div className=" bg-purple-900 rounded-full text-white w-8 h-8 p-2 mx-1">
                    <FaLinkedin/>
                </div>
            </div>
        </div>
        </>
    )
}

export default FollowUs;