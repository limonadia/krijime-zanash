import p1 from "../assets/about.jpg";
function AboutSection(){
    return(
        <>
            <div className="bg-transparent w-screen h-26em flex items-center justify-center mt-10 my-20">
                <div className='flex md:flex-row flex-col md:justify-between items-center justify-center lg:mx-20 md:mx-12 md:py-20'>
                    <div className="flex justify-center">
                        <img src={p1} className="w-9/12 h-9/12 md:float-right m-5"></img>
                    </div>
                    <div className="flex md:pl-10 md:pr-0 content-center container p-10">
                    <div className="bg-white flex flex-col 2xl:pr-28 md:pr-10 text-center lg:text-lg text-sm" style={{ fontFamily: "'Comic Neue', cursive" }} >
                        <h1 className="md:text-4xl  text-purple-900">MY MISSION</h1>
                        <p>Hello, my name is Nadia Mezini and i recreated this e-commerce website from scratch, using a template i found online.  I specifically chose an e-commerce website so that I could mix my two hobbies together, crafting jewelries and programming. All the pictures included are things I've created with my own hands. Hopefuly I will make it into a fully functional website all by myself, where I can actually sell my creations worldwide. .<br></br></p>
                        
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection;