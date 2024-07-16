import '../App.css';
import Banner from '../components/banner';
import NavBar from '../components/navbar';
import Cards from '../components/cards';
import CustomerReviews from '../components/customerRev';
import Footer from '../components/footer';
import ServiceFooter from '../components/serviceFooter';
import '../components/dropdown.css';
import { GiFairy } from "react-icons/gi";
import bg from "../assets/bg2.jpg";


function Home() {
  
  return (
   <>
   <head>
    <title>Fairies Creations</title>
    <link rel="icon" sizes="16x16" href={GiFairy}></link>
   </head>
   <div style={{backgroundImage: `url(${bg})`}}>
   <NavBar />
   <Banner titleText={'Fairies Creations'} subtitleText={'Handmade Resin Creations'} buttonText={'Shop Now'} btnDisplay  bannerH={40} id={"1"} linkpath={"/shop"}/>
   <Cards />
   <CustomerReviews/>
   <Banner titleText={'Grab Something'} subtitleText={'Give a beautiful gift to someone you love'} buttonText={'Shop Now'} btnDisplay bannerH={30} id={"2"} linkpath={"/shop"}/>
   <ServiceFooter/>
   <Footer/>
   </div>
   
   </>
   
  );
}

export default Home;
