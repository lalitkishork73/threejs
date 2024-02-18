import React from 'react'
import { BsFillSquareFill, BsFillTriangleFill, BsFillPentagonFill, BsFillHexagonFill, BsFillOctagonFill } from "react-icons/bs";
import { MdRectangle } from "react-icons/md";
import { FaCircle } from "react-icons/fa";

function Shape2D() {
    return (
        <div className='w-24 h-auto  border bg-[#242424]/70 backdrop-blur-md rounded-md p-2 text-sm' >
            <div className='flex flex-col w-full h-full'>
                <h1 className='font-semibold text-center'>2D Shapes</h1>
                <div className='flex flex-col justify-center items-center h-full w-full p-2 gap-3'>
                    <BsFillSquareFill className='text-3xl hover:scale-105' />
                    <MdRectangle className='text-3xl hover:scale-105' />
                    <BsFillTriangleFill className='text-3xl hover:scale-105' />
                    <BsFillPentagonFill className='text-3xl hover:scale-105' />
                    <BsFillHexagonFill className='text-3xl hover:scale-105' />
                    <BsFillOctagonFill className='text-3xl hover:scale-105' />
                    <FaCircle className='text-3xl hover:scale-105' />
                </div>
            </div>
        </div>
    )
}

export default Shape2D