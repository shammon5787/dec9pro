import React, { useEffect, useState } from 'react';
import FoodData from '../assets/Data/FoodData.js';
import { useDispatch } from 'react-redux';
import { addCategory } from '../Store/CategorySlice.jsx';

const CategoryMenu = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All'); // State to track the selected category

    const ListUniqueCategory = () => {
        const uniqueCategory = [...new Set(FoodData.map((food) => food.category))];
        setCategories(uniqueCategory);
    };

    useEffect(() => {
        ListUniqueCategory();
    }, []);

    const dispatch = useDispatch();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category); // Update the selected category
        dispatch(addCategory(category));
    };

    return (
        <div>
            <h1 className='uppercase mt-20 font-bold text-3xl'>order your favorite food</h1>
            <div className='flex items-center gap-5 overflow-scroll lg:overflow-hidden'>
                <button
                    onClick={() => handleCategoryClick('All')}
                    className={`rounded-md px-2 font-semibold py-0.5 my-2 ${selectedCategory === 'All' ? 'bg-green-500' : 'bg-blue-950'}`}
                >
                    All
                </button>
                {categories.map((category, i) => (
                    <button
                        onClick={() => handleCategoryClick(category)}
                        key={i}
                        className={`rounded-md px-2 font-semibold py-0.5 my-2 ${selectedCategory === category ? 'bg-green-500' : 'bg-blue-950'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryMenu;
