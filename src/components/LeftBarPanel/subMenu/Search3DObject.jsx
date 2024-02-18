import React from 'react'
import { IoSearch } from "react-icons/io5";
function LeftNavigation() {
  return (
    <div className='flex flex-col w-full '>
      <h1 className='text-center text-sm bg-white text-black'>3D Models</h1>
      <div className='w-full flex items-center'>
        <input type="search" className='py-2 px-3 w-full focus:outline-blue-500 focus:border-blue-500 outline-blue-600 outline-1  ' placeholder='Search' />
        <button className='border px-2 py-2  hover:bg-white/30'><IoSearch /></button>
      </div>
    </div>
  )
}

export default LeftNavigation