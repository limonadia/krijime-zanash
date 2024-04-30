function ProfilePicture({imgpath}){
    return(
        <>
        <div className='w-12 h-12 overflow-hidden rounded-full'>
        <img src={imgpath} className='w-full h-full object-cover'></img>
        </div>
        </>
    )
}

export default ProfilePicture;