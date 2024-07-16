import Banner from "../components/banner";
import EmailForm from "../components/emailForm";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import bg from "../assets/bg2.jpg";

function Contact(){

    return(
        <>
        <NavBar/>
      <Banner titleText={'Contact Us'} btnDisplay={false} bannerH={38} id={"1"}/>
      <div style={{backgroundImage:`url(${bg})`}}>
      <EmailForm/>
      </div>
      <Footer/>
        </>
    )
}

export default Contact;