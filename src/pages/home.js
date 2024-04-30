import '../App.css';
import Banner from '../components/banner';
import NavBar from '../components/navbar';
import Cards from '../components/cards';
import CustomerReviews from '../components/customerRev';
import Footer from '../components/footer';
import ServiceFooter from '../components/serviceFooter';
import '../components/dropdown.css';


function Home() {
  
  return (
   <>
   <NavBar />
   <Banner titleText={'Fairies Creations'} subtitleText={'Handmade Resin Creations'} buttonText={'Shop Now'} btnDisplay  bannerH={44} id={"1"} linkpath={"/shop"}/>
   <Cards />
   <CustomerReviews/>
   <Banner titleText={'Grab Something'} subtitleText={'Give a beautiful gift to someone you love'} buttonText={'Shop Now'} btnDisplay bannerH={30} id={"2"} linkpath={"/shop"}/>
   <ServiceFooter/>
   <Footer/>
   
   </>
   
  );
}

export default Home;
