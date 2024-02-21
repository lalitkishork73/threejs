import React, { useState } from 'react'
import ThreePanel from './Three/ThreePanel'
import RightNavigation from './RightBarPanel/RightNavigation'
import { SiAtom } from "react-icons/si";
import LeftPanelItems from './LeftBarPanel/LeftPanelItems';
import BottomPanel from './BottomPanel/BottomPanel';

function Main() {

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
                    <LeftPanelItems />
                    <div className='w-full h-full flex flex-col '>
                        <div className='flex w-full h-full '>
                            <ThreePanel />
                        </div>
                        <div className='flex w-full h-full'>
                            <BottomPanel />
                        </div>
                    </div>
                    <div className='w-[350px] border-l break-all p-2'>
                        <div className='flex flex-col'>
                            {/* <button onClick={handleRightSide}> Butt</button> */}
                            <RightNavigation />
                        </div>
                    </div>
                </div>
                <footer className='h-5 w-full bg-black text-xs flex justify-center items-center'>
                    <p className='font-semibold'>Created By Lalit Powered By ThreeJs</p>
                </footer>
            </div >
        </>
    )
}

export default Main