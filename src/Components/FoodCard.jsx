import React from 'react'
import img from '../assets/Food/4.avif'
import { MdOutlineStarPurple500 } from "react-icons/md";

const FoodCard = () => {
    return (
        <div className='bg-green-800 w-full flex flex-col items-center rounded-md lg:w-[23vw]'>
            <div className='p-3 bg-zinc-700 w-full items-center flex flex-col rounded-t-md hover:bg-white cursor-pointer transition-all duration-500'>
                <img className='rounded-md w-[200px] h-[100px] hover:scale-110 transition-all duration-500 cursor-grab' src={img} alt="" />
            </div>
            <div className='w-full p-3'>
                <div className='flex items-center justify-between font-semibold'>
                    <h1>PIZZA</h1>
                    <h1>$: 89</h1>
                </div>
                <p className='leading-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto enim atque.</p>
                <div className='flex items-center justify-between'>
                    <span className='flex items-center gap-2'>
                        <MdOutlineStarPurple500 className='text-xl text-yellow-500' />
                        <h1>4</h1>
                    </span>
                    <button className='bg-blue-950 rounded-md px-1 font-semibold my-2 hover:bg-green-400 hover:text-black transition-all duration-500'>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard