import ProfilePicture from "./profilePic";

function Customer({img, review, name}){
    return(
        <>
        <div className='m-3 bg-white '>
            <h1 className="md:text-6xl text-4xl text-left text-black" style={{color: '#b546ab'}}>,,</h1>
            <p>{review}</p>
            <ProfilePicture imgpath={img}/>
            <p style={{color: '#b546ab'}}>{name}</p>
        </div>
        </>
    )
}

export default Customer;