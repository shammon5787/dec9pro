import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between'>
        <div className='text-4xl font-bold'>
            <h1 className='uppercase'>{new Date().toUTCString().slice(0, 16)}</h1>
            <h1 className='uppercase'>welcome to our new fastfood website</h1>
        </div>
        <input type="search" name="search1" id="" />
    </div>
  )
}

export default Navbar