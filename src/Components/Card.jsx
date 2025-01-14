import React, { useState } from 'react'
import CardItem from './CardItem'
import { useSelector } from 'react-redux'

const Card = () => {

  const [activeCard, setactiveCard] = useState(true)
  const selectItem = useSelector((state)=>state.card.card)
  const totalItem = selectItem.reduce((totalItem, item)=>totalItem + item.qty, 0)
  const totalPrice = selectItem.reduce((totalPrice, item)=>totalPrice + item.qty * item.price, 0)
  return (
    <>
      <div className={`bg-slate-900 w-full lg:w-[30vw] h-full fixed top-0 right-0 p-5 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50 `}>
        <div className='flex items-center justify-between'>
          <h1 className='font-semibold text-3xl'>Your Orders </h1>
          <h1 className='font-semibold text-3xl cursor-pointer hover:text-green-900 transition-all duration-500 hover:bg-yellow-700 rounded-full' onClick={() => setactiveCard(false)}>X</h1>
        </div>

        {
          selectItem.map((item)=>{
            return(
              <CardItem key={item.id} id = {item.id} name = {item.name} price = {item.price} image = {item.image} qty = {item.qty} />
            )
          })
        }

        <div className='fixed bottom-2 font-semibold'>
          <h1>Total Items: {totalItem} </h1>
          <h1>Totla Price: {totalPrice} </h1>
          <hr />
          <button className='bg-green-700 rounded-md w-[90vw] lg:w-[26vw] my-2  '>Check Out</button>
        </div>
      </div>
      <h1 className={`fixed bottom-6 right-6 cursor-pointer text-3xl text-green-500 bg-black rounded-full p-2 ${selectItem.length > 0 ? "animate-bounce" : "animate-none"} `} onClick={() => setactiveCard(true)} >📮</h1>
    </>
  )
}

export default Card