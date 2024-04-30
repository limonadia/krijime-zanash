

function Total(){
    return(
        <>
        <div>
            <div className="flex flex-row justify-between border-b border-t p-5">
                <div className="text-purple-500">Subtotal:</div>
                <div className="text-gray-500">$17.99</div>
            </div>
            <div className="flex flex-col w-full p-3">
                <div><button className="uppercase w-full mx-auto">View Cart</button></div>
                <div><button className="uppercase w-full mx-auto">Checkout</button></div>
            </div>
        </div>
        </>
    )
}

export default Total;