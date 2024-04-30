import ContactSection from "./contactSection";
import { TfiEmail } from "react-icons/tfi";
import { MdPhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import FollowUs from "./followUs";

function EmailForm(){
    return(
        <>
        <div className="h-full w-screen flex md:my-32 my-24">
            <div className="flex md:flex-row flex-col lg:px-40 md:px-30 px-10 justify-items-center items-center w-full justify-between">
                <div className="flex flex-col md:w-6/12 w-11/12 h-full">
                    <h1 className="py-5 text-3xl font-black md:text-left text-center">Get In Touch</h1>
                    <div className="bg-purple-200 shadow-md">
                        <form className="md:p-12 p-5 flex flex-col">
                            <input type="text" className="border border-gray-400 p-3 my-2" placeholder="Full Name" ></input>
                            <input type="tel" className="border border-gray-400 p-3 my-2" placeholder="Phone Number" ></input>
                            <input type="email" className="border border-gray-400 p-3 my-2" placeholder="Email" ></input>
                            <textarea rows='6'  className="border border-gray-400 p-3 my-2" placeholder="Message"></textarea>
                            <button type='submit' className="bg-purple-600 uppercase text-white p-2 float-left md:w-2/6 my-2">Send</button>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col md:w-6/12 w-11/12  h-full p-2 md:pl-16">
                    <h1 className="py-5 text-3xl font-black md:text-left text-center">Talk To Us</h1>
                    <div className="flex flex-col md:items-start items-center">
                        <ContactSection icon={<TfiEmail/>} h1Text={"Email"} desc={"something@fairies.com"}/>
                        <ContactSection icon={<MdPhoneInTalk/>} h1Text={"Phone Number"} desc={"123-456-7890"}/>
                        <ContactSection icon={<IoLocationOutline/>} h1Text={"Address"} desc={"1001 Albania, Tirana"}/>
                    </div>
                    <div>
                        <FollowUs/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default EmailForm;