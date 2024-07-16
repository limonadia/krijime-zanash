import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function FollowUs(){

    return(
        <>
        <div className="p-10 flex flex-col">
            <h1 className="text-xl font-medium mb-4">Follow Us:</h1>
            <div className="flex flex-row ">
                <div className=" bg-purple-900 rounded-full text-white w-8 h-8 p-2 mx-1">
                    <a href="https://www.instagram.com/krijime.zanash/"  target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                </div>
                <div className=" bg-purple-900 rounded-full text-white w-8 h-8 p-2 mx-1">
                <a href="https://www.linkedin.com/in/nadia-mezini-738625284/"  target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                </div>
                <div className=" bg-purple-900 rounded-full text-white w-8 h-8 p-2 mx-1">
                <a href="https://github.com/limonadia"  target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default FollowUs;