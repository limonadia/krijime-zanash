import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Banner from '../components/banner';
import ProfileDivs from '../components/profileDivs';


function Profile(){
    return (
        <>
            <NavBar />
            <Banner bannerH={20} id={"1"}/>
            <ProfileDivs />
            <Footer/>

        </>
    );
}

export default Profile;