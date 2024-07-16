

function ContactSection({icon, h1Text, desc, link}){
    return(
        <>
            <div className="flex flex-row py-2 my-5 w-full" >

                <div className="pb-3">
                    <div className=" bg-purple-900 rounded-full text-white w-10 h-10 p-3">
                        {icon }
                    </div>
                </div>
                <div className="flex flex-col px-5">
                    <h1 className="text-gray-500 text-sm uppercase">{h1Text}</h1>
                    <a href={link} className="md:text-2xl text-sm text-purple-900" target="_blank" rel="noopener noreferrer">{desc} </a>
                </div>

            </div>
        </>
    )
}

export default ContactSection;