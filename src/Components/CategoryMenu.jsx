import React, { useEffect, useState } from 'react'
import FoodData from '../assets/Data/FoodData.js'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])

    const ListUniqueCategory = () => {
        const uniquecategory = [ ... new Set(FoodData.map((food) => food.category)) ]
        setcategories(uniquecategory)
    }
    useEffect(() => {
        ListUniqueCategory()
    }, [])
    return (
        <div>
            <h1 className='uppercase mt-20 font-bold text-3xl'>order your favorite food</h1>
            <div className='flex items-center gap-5 overflow-scroll lg:overflow-hidden'>
                {
                    categories.map((category, i) => (
                        <button className='bg-blue-950 rounded-md px-2 font-semibold py-0.5 my-2'>{category}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryMenu