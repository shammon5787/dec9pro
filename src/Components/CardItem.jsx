import React from 'react'
import img from '../assets/Food/4.avif'
import { useDispatch } from 'react-redux'
import { deccrementItem, incrementItem, removeCard } from '../Store/CardSlice'

const CardItem = ({id, name, price, image, qty}) => {
  const dispatch = useDispatch()
  return (
    <div className='bg-green-700 rounded-md p-1.5 mt-1 flex gap-5'>
        <h1 onClick={()=>dispatch(removeCard({id}))} className='absolute right-10 cursor-pointer bg-red-800 rounded-full '>🛠</h1>
        <img className='rounded-full w-[55px] h-[55px] ' src= {image} alt="" />
        <div className='flex items-center font-semibold' >
            <div className='leading-5'>
                <h1>{name}</h1>
                <h1>$: {price}</h1>
            </div>
            <div className='absolute flex items-center justify-between gap-3 right-10 mt-7 '>
            <h1 onClick={()=> qty > 1 ? dispatch(deccrementItem({id})) : qty = 1} className='font-bold text-3xl cursor-pointer'>-</h1>
                <h1>{qty}</h1>
                <h1 onClick={()=> dispatch(incrementItem({id}))} className='font-bold text-3xl cursor-pointer'>+</h1>
            </div>
        </div>
    </div>
  )
}

export default CardItem