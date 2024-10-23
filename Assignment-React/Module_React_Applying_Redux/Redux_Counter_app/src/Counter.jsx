import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {


    const values = useSelector((state)=>state.counter.count)  

    const dispatch = useDispatch()
    return (
        <div className='container'>
            <h1 className='hedding'>Hello Redux</h1>


            <h2 className='content'>Counte : {values}</h2>

            <div className='btn'>

                <button onClick={()=>{dispatch({type:"inc"})}}>Increment</button>
                <button  onClick={()=>{dispatch({type:"dec"})}}>Decrement</button>

            </div>
        </div>
    );
}

export default Counter;
