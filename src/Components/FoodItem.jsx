import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../assets/Data/FoodData.js'

const FoodItem = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-3'>
        {
            FoodData.map((food)=>(
                <FoodCard />
            ))
        }
    </div>
  )
}

export default FoodItem