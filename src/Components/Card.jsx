import React, { useState } from 'react'
import img from '../assets/Food/6.avif'
import CardItem from './CardItem'
import { useSelector } from 'react-redux'


const Card = () => {

    const [activeCard, setactiveCard] = useState(true)
    const selectCard = useSelector((state)=>state.card.card)
    return (
        <>
            <div className={`bg-green-900 fixed top-0 right-0 h-full lg:w-[28vw] w-full p-3 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 `}>
                <div className='flex items-center justify-between font-semibold uppercase text-3xl' >
                    <h1>Your Orders</h1>
                    <h1 onClick={() => setactiveCard(false)} className='cursor-pointer hover:text-black transition-all duration-500'>X</h1>
                </div>

                {
                    selectCard.map((item)=>{
                        return(
                            <CardItem key={item.id} id = {item.id} name = {item.name} price = {item.price} image = {item.image} qty = {item.qty} />
                        )
                    })
                }

                <div className='fixed bottom-3'>
                    <h1>Total Items : 0</h1>
                    <h1>Total Price : 0</h1>
                    <hr />
                    <button className='bg-slate-950 rounded-md font-semibold hover:bg-green-500 transition-all duration-500 my-2 w-[90vw] lg:w-[26vw] '>Check Out</button>
                </div>
            </div>
            <h1 onClick={()=>setactiveCard(true)} className='fixed bottom-7 right-7 text-4xl rounded-full bg-gray-950 cursor-pointer'>☮</h1>
        </>
    )
}

export default Card