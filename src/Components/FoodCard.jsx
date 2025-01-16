import React from 'react'
import img from '../assets/Food/5.avif'
import { useDispatch } from 'react-redux'
import { addCard } from '../Store/CardSlice'

const FoodCard = ({id, name, image, price, desc, rating}) => {
    const dispatch = useDispatch()
    return (
        <div className='w-full lg:w-[23vw] rounded-lg bg-white font-semibold'>
            <div className='bg-slate-800 p-3 flex flex-col items-center rounded-t-md w-full hover:bg-white cursor-pointer transition-all duration-500'>
                <img className='w-[200px] h-[100px] rounded-md cursor-grab hover:scale-110 transition-all duration-500' src={image} alt="" />
            </div>
            <div className='bg-blue-950 p-3 rounded-b-md'>
                <div className='flex items-center justify-between'>
                    <h1>{name}</h1>
                    <h1>$: {price}</h1>
                </div>
                <p className='font-thin'>{desc}.</p>
                <div className='flex items-center justify-between'>
                    <span className='flex items-center gap-2'>
                        <h1>🟡</h1>
                        <h1>{rating}</h1>
                    </span>
                    <button onClick={()=>dispatch(addCard({id, name, price, image, qty : 1}))} className='px-1.5 bg-blue-900 rounded-md  hover:bg-green-900 transition-all duration-500 my-2 '>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard