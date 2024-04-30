import './banner.css';
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Banner({titleText, subtitleText, buttonText, btnDisplay, bannerH, id, linkpath}){
    
    useEffect(() => {
        const btn = document.getElementById('bt');
        if (btn) {
          btn.style.display = btnDisplay ? 'block' : 'none';
        }
      }, [btnDisplay]);

      useEffect(() => {
        const ban = document.getElementById(id);
        if (ban) {
          const height = `${bannerH}rem`;
          ban.style.height = height;
        }
      }, [bannerH, id]);


return(
    <><style>
        @import url('https://fonts.googleapis.com/css2?family=Rubik+Scribble&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
    </style>
    
    <div id={id} className="banner gap-2 md:gap-5 2xl:gap-11 w-screen flex flex-col justify-center items-center md:-mt-14 ">
            <h1 className="bannertitle sm:text-6xl text-2xl mb-0 uppercase font-black cursor-default">
                {titleText}
            </h1>
            <p className="bannersubtitle md:text-4xl text-lg text-center font-semibold">
                {subtitleText}
            </p>
            <div id='bt'>
            <Link to={linkpath}><button  className="bannerbutton md:px-8 md:py-2  px-4 py-1 text-sm md:text-base rounded-3xl bg-transparent cursor-default">{buttonText}</button></Link>
            </div>
        
    </div>
        </>
);
}

export default Banner;