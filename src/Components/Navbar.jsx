import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
        <div className='text2xl md:text-3xl lg:text-4xl font-bold'>
            <h1> {new Date().toUTCString().slice(0, 16)} </h1>
            <h1 className='uppercase mt-2'>welcome to our new website</h1>
        </div>
        <input className='p-2 w-full lg:w-[22vw] rounded-md outline-none text-black font-semibold ' type="search" name="searchs" id="" />
    </div>
  )
}

export default Navbar