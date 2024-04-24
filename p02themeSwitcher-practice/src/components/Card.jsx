import React from "react";

export default function Card() {

    return(
        <div className='flex justify-center'>
            <div className='p-6 dark:text-white dark:bg-slate-900 border my-8 text-center  font-bold rounded-lg justify-center w-96'>
            <div className='flex justify-center '>
                <img src="https://icpc.bubt.edu.bd/assets/img/team/m_33.jpg" 
                className='rounded-full w-1/6'/> 
            </div>
            <h1 className='text-3xl'>Card</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, expedita?</p>
        </div>
        </div>
    )
}