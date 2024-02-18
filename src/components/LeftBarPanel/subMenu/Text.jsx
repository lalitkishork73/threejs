import React from 'react'

function Text() {
  return (
    <div className='w-48 h-auto  border bg-[#242424]/70 backdrop-blur-md rounded-md p-2 text-sm flex flex-col gap-2'>
      <textarea type="text" placeholder='Create Text' />
      <button className='border px-3 py-1 hover:bg-white hover:text-black'>Add</button>
    </div>
  )
}

export default Text