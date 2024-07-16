import { Link } from "react-router-dom";

function Footer(){
return(
<>
    <div className="bg-white  w-screen md:h-20 h-64 text-purple-900 " style={{ fontFamily: "'Comic Neue', cursive" }}>
            <div className="flex md:flex-row flex-col text-center justify-between">
                <div className="flex flex-row justify-center md:mx-2 py-10">
                    <Link to="/home" onClick={window.scrollTo(0, 0)}><p className="px-4 md:px-3 text-sm"> Home </p></Link>
                    <Link to="/about"><p className="px-4 md:px-3 text-sm"> About </p></Link>
                    <Link to="/shop"><p className="px-4 md:px-3 text-sm"> Shop </p></Link>
                    <Link to="/contact"><p className="px-4 md:px-3 text-sm"> Contact </p></Link>
                    </div>
                <div className="py-10 md:mx-5">
                <Link to="/home"><p className="uppercase text-lg ">Fairies Creations</p></Link>
                    </div>
                <div className="py-10 md:mx-5">
                    Copyright © 2024 Fairies Creations Store
                    </div>
            </div>
    </div>
</>
)
}

export default Footer;