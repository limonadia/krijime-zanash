import './banner.css';

function Banner({titleText, subtitleText, buttonText}){
return(
    <><style>
        @import url('https://fonts.googleapis.com/css2?family=Rubik+Scribble&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
    </style>
    
    <div className="banner gap-2 md:gap-5 2xl:gap-11 w-screen h-[75vh] flex flex-col justify-center items-center md:-mt-14 ">
            <h1 className="bannertitle md:text-6xl text-2xl mb-0 uppercase font-black cursor-default">
                {titleText}
            </h1>
            <p className="bannersubtitle md:text-4xl text-lg font-semibold">
                {subtitleText}
            </p>
            <div>
            <button className="bannerbutton md:px-8 md:py-2  px-4 py-1 text-sm md:text-base rounded-3xl bg-transparent cursor-default">{buttonText}</button>
        </div>
        </div></>
)
}

export default Banner;