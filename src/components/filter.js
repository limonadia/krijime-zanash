import '../components/filter.css'
import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import './popup.css';

function Filter() {
    const [value, setValue] = useState([]);

    return (

        <>
            <div className='flex flex-col lg:pr-10 mb-8 w-11/12 hover-container' style={{ fontFamily: "Comic Neue" }}>
            <span class="hover-popup">This component is not finished yet.</span>
                <h1 className='text-2xl font-bold float-left'>Filter by price</h1>
                <div >
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        defaultValue={[10, 30]}
                        max={30}
                        min={10}
                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                        onChange={(value, index) => setValue(value)}
                    />
                </div>
                <div className='flex flex-row items-center justify-end'>
                    <div className='m-1 p-4 py-3 priceBox rounded'>${value[0]}</div>
                    <div className='m-1 p-4 py-3 priceBox rounded'>${value[1]}</div>
                </div>
                <div >
                    <button className='float-right cursor-pointer'>RESET</button>
                </div>
            </div>
        </>
    )

}

export default Filter;