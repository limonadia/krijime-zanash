import Banner from "../components/banner";
import EmailForm from "../components/emailForm";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

function Contact(){

    return(
        <>
        <NavBar/>
      <Banner titleText={'Contact Us'} btnDisplay={false} bannerH={38} id={"1"}/>
      <EmailForm/>
      <Footer/>
        </>
    )
}

export default Contact;