import ContactSection from "./contactSection";
import { TfiEmail } from "react-icons/tfi";
import { MdPhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import FollowUs from "./followUs";
import ContactForm from "./contactForm";

function EmailForm(){
    return(
        <>
        <div className="h-full w-screen flex md:my-32 my-24">
            <div className="flex md:flex-row flex-col lg:px-40 md:px-30 px-10 justify-items-center items-center w-full justify-between">
                <div className="flex flex-col md:w-6/12 w-11/12 h-full">
                    <h1 className="py-5 text-3xl font-black md:text-left text-center">Get In Touch</h1>
                    <div className="bg-purple-200 shadow-md">
                        <ContactForm/>
                    </div>
                </div>
                <div className="flex flex-col md:w-6/12 w-11/12  h-full p-2 md:pl-16">
                    <h1 className="py-5 text-3xl font-black md:text-left text-center">Talk To Us</h1>
                    <div className="flex flex-col md:items-start items-center">
                        <ContactSection icon={<TfiEmail/>} h1Text={"Email"} desc={"nadiamezini@gmail.com"} link={"mailto:nadiamezini@gmail.com"}/>
                        <ContactSection icon={<MdPhoneInTalk/>} h1Text={"Phone Number"} desc={"123-456-7890"} link={"tel:1234567890"}/>
                        <ContactSection icon={<IoLocationOutline/>} h1Text={"Address"} desc={"1001 Albania, Tirana"} link={"https://maps.app.goo.gl/TvV8PbiRJFNofRj3A"}/>
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