import logo from './logo.svg';
import './App.css';
import Banner from './components/banner';
import NavBar from './components/navbar';

function App() {
  return (
   <>
   <NavBar />
   <Banner titleText={'Fairies Creations'} subtitleText={'Handmade Resin Creations'} buttonText={'Shop Now'} />
   </>
  );
}

export default App;
