
function CartButton({icon, atc}){
    return(
        <>
        <div onClick={atc} className="container opacity-50 bg-white hover:opacity-100 transition-all rounded-full p-2">
            {icon}
        </div>
        </>
    )
}

export default CartButton;