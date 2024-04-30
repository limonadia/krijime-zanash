import FooterSection from "./footerSector";
import { FaLock } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import './customerRev.css';

function ServiceFooter(){
    return(
        <>
        <div className="footer-div">
        <div className="flex sm:flex-row lg:px-20 flex-col justify-between sm:h-40 h-screen sm:mx-30 mx-15 my-10" style={{ fontFamily: "'Comic Neue', cursive" }}>
            <FooterSection icon={<FaLock/>} h1Text={"Secure Payment Request"} desc={"All our payments are SSL secured"}/>
            <FooterSection icon={<FaBox/>} h1Text={"Delivered with care"} desc={"Super fast shipping to your door"}/>
            <FooterSection icon={<FaHandHoldingHeart/>} h1Text={"Exellent Service"} desc={"Live chat and phone support"}/>
        </div>
        </div>
        </>
    )
}

export default ServiceFooter;