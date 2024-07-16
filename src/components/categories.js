import './popup.css';

function Categories(){
    return(
        <>
        <div style={{fontFamily:"Comic Neue"}} className='hover-container'>
        <span class="hover-popup">This component is not finished yet.</span>
            <div>
                <p className="text-xl mb-4 text-purple-900">Categories</p>
                <div className="text-lg ml-5">
                <p className="my-2"><a className="text-purple-900">Earrings</a>(6)</p>
                <p className="my-2"><a className="text-purple-900">Necklaces</a>(6)</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Categories;