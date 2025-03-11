import NavBar from '../components/navbar';
import Footer from '../components/footer';
import { useState } from "react";

function PDP(){

    const images = [
        { src: "/img/p1.jpg" },
        { src: "/img/show2.jpg" },
        { src: "/img/show3.jpg" },
        { src: "/img/show4.jpg" },
      ];

      const [selectedImage, setSelectedImage] = useState(images[0].src);
      
    return (
        <>
            <NavBar />
            <div className='w-full h-full px-8 md:py-8 py-14'>
                <div className='w-full h-full md:h-2/3 flex md:flex-row flex-col rounded-2xl shadow-2xl'>
                    <div className='flex md:flex-col flex-row h-full md:w-1/12 w-full items-center align-center content-center md:justify-center justify-between px-2'>
                        {images.map((img) => (
                            <div className={`flex items-center rounded-full w-full overflow-hidden my-5 mx-5 cursor-pointer transition-all ${
                                selectedImage === img.src ? "border-4 border-purple-500" : "border-2 border-transparent"
                              }`} onClick={() => setSelectedImage(img.src)}>
                            <img src={img.src} alt="product" className="md:w-full w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>

                    <div className='flex md:flex-col flex-row md:w-6/12 w-full h-6/12 items-center align-center content-center justify-center p-5'>
                        <img src={selectedImage} alt="product" className=' w-full h-full object-cover rounded-3xl'></img>
                    </div>

                    <div className='flex flex-col h-full md:w-5/12 w-full justify-between align-center items-center md:py-40 py-5 px-5 content-center'>
                        
                        <div className='flex flex-row items-center'>
                            <p className='text-3xl text-purple-600 pr-3'>$20</p>
                            <p className='text-4xl'>Title</p>
                        </div>
                        <button>Add to Cart</button>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut hendrerit nibh. Nulla lobortis erat quis lacus interdum va.</p>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    );
}

export default PDP;