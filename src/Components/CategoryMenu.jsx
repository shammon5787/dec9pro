import React, { useEffect, useState } from 'react'
import FoodData from '../assets/Data/FoodData.js'
import { useDispatch } from 'react-redux';
import { addCategory } from '../Store/CategorySlice.jsx';

const CategoryMenu = () => {

    const [categories, setcategories] = useState([]);
    const ListUniqueCategory = () => {
        const UniqueCategory = [... new Set(FoodData.map((food) => food.category))]
        setcategories(UniqueCategory)
    }
    useEffect(() => {
        ListUniqueCategory()
    }, [])

    const dispatch = useDispatch()
    return (
        <div className='mt-20'>
            <h1 className='font-bold uppercase text-4xl'>order your favorite food</h1>
            <div className='gap-5 items-center flex overflow-x-scroll lg:overflow-x-hidden'>
            <button onClick={()=>dispatch(addCategory("All"))} className='px-2 bg-blue-900 rounded-md font-semibold hover:bg-green-900 transition-all duration-500 text-xl my-2 '>All</button>
                {
                    categories.map((category, i) => (
                        <button onClick={()=>dispatch(addCategory(category))} key={i} className='px-2 bg-blue-900 rounded-md font-semibold hover:bg-green-900 transition-all duration-500 text-xl my-2 '>{category}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryMenu