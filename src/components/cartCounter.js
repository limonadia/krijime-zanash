import { useEffect, useState } from "react";


function CartCounter({counterNum}){
    const [counter, setCounter]= useState(0);

    useEffect(()=>{
        console.log(counterNum)
        if(counterNum==='increment') {
            setCounter(counter+1)
        } else if(counterNum==='decrement') {
            setCounter(counter-1)
        } else {
            setCounter(counterNum)
        }
    }, [counterNum])

    return(
        <>
        <div className='rounded-full flex justify-center items-center text-white w-4 h-4 absolute text-xs translate-x-3/4 translate-y-3/4' style={{backgroundColor:"purple"}}>{counter}</div>
        </>
    )
}

export default CartCounter;