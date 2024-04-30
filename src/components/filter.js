import '../components/filter.css'
import React, { useState } from 'react';
import ReactSlider from 'react-slider';

function Filter(){
    const [value, setValue] = useState([]);
    
    return(
        
        <>
        <div className='flex flex-col pr-10 mb-8' style={{fontFamily:"Comic Neue"}}>
            <h1 className='text-2xl font-bold'>Filter by price</h1>
        <div >
            <ReactSlider
                className="horizontal-slider "
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[10,30]}
                max={30}
                min={10}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                onChange={(value, index)=> setValue(value)}
            />
         </div>
         <div>
            <div className='float-right flex flex-row'>
            <div className='m-1 p-4 py-3 priceBox rounded'>${value[0]}</div>
            <div className='m-1 p-4 py-3 priceBox rounded'>${value[1]}</div>
            </div>
        </div>
        <div>
            <button className='float-right cursor-pointer'>RESET</button>
        </div>
        </div>
        </>
    )
    
}

export default Filter;