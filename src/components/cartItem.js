import { IoCloseCircleOutline } from "react-icons/io5";

function CartItem({title, imgpath, name, price}){
    return(
        <>
        <div className="flex flex-row p-3 items-center">
            <div className="p-3">
                <img src={imgpath} className="h-16 w-16"></img>
            </div>
            <div className="w-full p-3">
                <div className="flex flex-row justify-between ">
                    <div>{name}</div>
                    <div><IoCloseCircleOutline  className="h-5 w-5"/></div>
                </div>
                <div>{price}</div>
            </div>
            
        </div>
        </>
    )
}

export default CartItem;