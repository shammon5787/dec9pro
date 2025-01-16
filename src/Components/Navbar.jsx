import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../Store/SearchSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between'>
        <div className='text-4xl font-bold'>
            <h1 className='uppercase'>{new Date().toUTCString().slice(0, 16)}</h1>
            <h1 className='uppercase'>welcome to our new fastfood website</h1>
        </div>
        <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='p-2 w-full lg:w-[24vw] rounded-md outline-none text-black font-semibold' placeholder='search here' type="search" name="search1" id="" />
    </div>
  )
}

export default Navbar