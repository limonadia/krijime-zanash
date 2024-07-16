
function FooterSection({icon, h1Text, desc}){
    return(
        <>
            <div className=" bg-white flex sm:flex-row flex-col items-center p-5 text-sm  md:justify-left justify-center text-center sm:text-left " >

                <div className="pb-3">
                    <div className=" bg-purple-900 rounded-full text-white w-10 h-10 p-3">
                        {icon }
                    </div>
                </div>
                <div className="flex flex-col px-5">
                    <h1 className="font-black uppercase">{h1Text}</h1>
                    <p>{desc}</p>
                </div>

            </div>
        </>
    )
}

export default FooterSection;