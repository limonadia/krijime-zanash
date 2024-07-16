import Customer from "./customer";
import './customerRev.css';
import p1 from '../assets/pfp1.png';
import p2 from '../assets/pfp2.png';
import p3 from '../assets/pfp3.jpeg';

function CustomerReviews(){

    return(
        <>
        <div className="customer-div bg-transparent w-screen py-40 justify-center content-center flex" style={{ fontFamily: "'Comic Neue', cursive" }}>
            <div className="flex flex-col  w-9/12">
            <h1 className="md:text-4xl text-2xl" style={{color: '#b546ab', background:'white'}}>What Our Customers Say</h1>
            <div className="flex md:flex-row flex-col justify-between">
                <Customer img={p1} review={"Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer."} name={"JENNIFER LEWIS"}/>
                <Customer img={p2} review={"Great user experience on your website. I found exactly what I was looking for at a great price. I will definitely be telling my friends."} name={"ALICIA HEART"}/>
                <Customer img={p3} review={"Thank you for the excellent shopping experience. It arrived quickly and was exactly as described. I will definitely be shopping with you again in the future."} name={"JUAN CARLOS"}/>
            </div>
            </div>
        </div>
        </>
    )
}

export default CustomerReviews;