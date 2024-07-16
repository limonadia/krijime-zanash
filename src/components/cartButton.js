import './cartButton.css';
function CartButton({icon, atc}){
    return(
        <>
        <div onClick={atc} className="container opacity-50 bg-white hover:opacity-100 transition-all rounded-full p-2 button-container">
            <span className="popup-text">add to cart</span>
            {icon}
        </div>
        </>
    )
}

export default CartButton;