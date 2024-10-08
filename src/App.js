import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from './pages/about';
import Shop from './pages/shop';
import Contact from './pages/contact';

function App() {
  
  return (
   <>
   <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/home" element={<Home/>}/>
    <Route path ="/about" element={<About/>}/>
    <Route path ="/shop" element={<Shop/>}/>
    <Route path ="/contact" element={<Contact/>}/>
   </Routes>
   </>
   
  );
}

export default App;
