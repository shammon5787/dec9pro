import React, { useState } from 'react'
import img from '../assets/Food/4.avif'

const CardItem = ({id, name, image, price, qty}) => {
  return (
    <div className='bg-blue-950 p-2 rounded-md mt-1 flex gap-5'>
        <img className='w-[55px] h-[55px] rounded-full' src= {image} alt="" />
        <div className='flex items-center font-semibold'>
            <div className='leading-5'>
                <h1>{name}</h1>
                <h1>$: {price}</h1>
            </div>
            <div className='flex items-center absolute right-7 gap-6 mt-8'>
                <h1 className='cursor-pointer text-3xl hover:text-black transition-all duration-500'>+</h1>
                <span>{qty}</span>
                <h1 className='cursor-pointer text-3xl hover:text-black transition-all duration-500'>-</h1>
            </div>
        </div>
    </div>
  )
}

export default CardItem