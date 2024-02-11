import React, { useState } from 'react'
import ThreePanel from './ThreePanel'
import LeftNavigation from './LeftNavigation'
import RightNavigation from './RightNavigation'
import { CgMenuGridR } from "react-icons/cg";
import { SiAtom } from "react-icons/si";
function Main() {
    const [leftToggle, setLeftToggle] = useState(false)
    const [rightToggle, setRightToggle] = useState(false)

    const handleLeftSide = () => {
        setLeftToggle(!leftToggle)
    }
    const handleRightSide = () => {
        setRightToggle(!rightToggle)
    }
    return (
        <>
            <div className='w-screen h-screen flex flex-col text-sm'>
                <div className='flex items-center justify-center px-2 h-10 bg-black/70 backdrop-blur-sm'>
                    <h1 className='text-lg text-white font-bold hover:text-blue-500 px-4 flex items-center gap-2'><SiAtom /> 3Demon'sNull</h1>
                </div>
                <div>
                    <h1 className='text-center font-bold text-black bg-white'>Editor</h1>
                </div>
                <div className='flex h-full relative'>
                    <div className={` border-r break-all p-2 h-full absolute bg-[#242424] ${leftToggle ? ' w-[450px] transition-all duration-500 ease-in-out px-10' : ' w-[50px] transition-all duration-300'}`}>
                        <div className={`flex flex-col flex-wrap`}>
                            <button onClick={handleLeftSide} className='flex justify-center items-center'> <CgMenuGridR className='text-xl hover:text-blue-500' /></button>
                            {
                                leftToggle &&
                                < LeftNavigation />
                            }
                        </div>
                    </div>
                    <div className='w-full'>
                        <ThreePanel />
                    </div>
                    <div className='w-[350px] border-l break-all p-2'>
                        <div className='flex flex-col'>
                            <button onClick={handleRightSide}> Butt</button>
                            <RightNavigation />
                        </div>
                    </div>
                </div>
                <footer className='h-10 w-full bg-black text-xs flex justify-center items-center'>
                    <p className='font-semibold'>Created By Lalit Powered By ThreeJs</p>
                </footer>
            </div >
        </>
    )
}

export default Main