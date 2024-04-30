import NavBar from '../components/navbar.js';
import Banner from '../components/banner.js';
import Footer from '../components/footer.js';
import AboutSection from '../components/aboutSection.js';
function About(){
    return(
        <>
        <NavBar/>
        <Banner titleText={'WHO ARE WE?'} btnDisplay={false} bannerH={38} id={"1"}/>
        <AboutSection/>
        <Banner titleText={'Grab Something'} subtitleText={'Give a beautiful gift to someone you love'} buttonText={'Shop Now'} btnDispla={true}  bannerH={24} id={"2"} linkpath={"/shop"}/>
        <Footer/>   
        </>
    )
}
export default About;