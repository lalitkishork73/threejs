import React from 'react'
import { IoMdCube } from "react-icons/io";
import { Tb3DCubeSphere } from "react-icons/tb";

function Shape3D() {
  return (
    <div className='w-24 h-auto  border bg-[#242424]/70 backdrop-blur-md rounded-md p-2 text-sm' >
    <div className='flex flex-col w-full h-full'>
        <h1 className='font-semibold text-center'>3D Shapes</h1>
        <div className='flex flex-col justify-center items-center h-full w-full p-2 gap-3'>
            <IoMdCube className='text-3xl hover:scale-105' />
            <Tb3DCubeSphere className='text-3xl hover:scale-105' />
        </div>
    </div>
</div>
  )
}

export default Shape3D