import React, { useState } from 'react';
import { CgMenuGridR } from "react-icons/cg";
import { IoClose, IoShapes, IoTextSharp } from "react-icons/io5";
import { BsBadge3DFill } from "react-icons/bs";
import Search3DObject from './subMenu/Search3DObject';
import Shape2D from './subMenu/Shape2D';
import Shape3D from './subMenu/Shape3D';
import Text from './subMenu/Text';

function LeftPanelItems() {
    const [leftToggle, setLeftToggle] = useState(false);
    const [rightToggle, setRightToggle] = useState(false);
    const [isShapesHovered, setIsShapesHovered] = useState(false);
    const [isTextHovered, setIsTextHovered] = useState(false);
    const [isShape3dHovered, setIsShape3dHovered] = useState(false);

    const handleRightSide = () => { setRightToggle(!rightToggle); };

    const handleLeftSide = () => { setLeftToggle(!leftToggle) };

    const handleShapesMouseOver = () => { setIsShapesHovered(true) };

    const handleShapesMouseOut = () => { setIsShapesHovered(false) };

    const handleTextMouseOver = () => { setIsTextHovered(true) };

    const handleTextMouseOut = () => { setIsTextHovered(false) };

    const handleShape3dMouseOver = () => { setIsShape3dHovered(true) };

    const handleShape3dMouseOut = () => { setIsShape3dHovered(false) };

    return (
        <div className={` border-r break-all p-2 h-full absolute bg-[#242424] ${leftToggle ? ' w-[450px] transition-all duration-200 ease-in-out px-1 bg-[#242424]/70 backdrop-blur-md' : ' w-[50px] transition-all duration-300'}`}>
            <div className={`flex flex-col flex-wrap gap-3`}>
                <button onClick={handleLeftSide} className={`flex ${leftToggle ? 'justify-end' : 'justify-center'} items-center`}>
                    {leftToggle ? <IoClose className='text-xl hover:text-red-500' /> : <CgMenuGridR className='text-xl hover:text-blue-500' />}
                </button>
                {leftToggle && <Search3DObject />}
                {!leftToggle && (
                    <div className='flex flex-col gap-4 '>
                        <div className={`relative  flex justify-center items-center`}
                            onMouseOver={handleShapesMouseOver}
                            onMouseOut={handleShapesMouseOut}
                        >
                            <IoShapes className=' text-xl hover:text-blue-500' />
                            {isShapesHovered &&
                                <div className='absolute inset-0 left-8'>
                                    <Shape2D />
                                </div>
                            }
                        </div>
                        <div className={`relative flex justify-center items-center`}
                            onMouseOver={handleTextMouseOver}
                            onMouseOut={handleTextMouseOut}
                        >
                            <IoTextSharp className='text-xl hover:text-blue-500' />
                            {isTextHovered &&
                                <div className='absolute inset-0 left-8'>
                                    <Text />
                                </div>
                            }
                        </div>
                        <div className={`relative flex justify-center items-center`}
                            onMouseOver={handleShape3dMouseOver}
                            onMouseOut={handleShape3dMouseOut}
                        >
                            <BsBadge3DFill className='text-xl hover:text-blue-500' />
                            {isShape3dHovered &&
                                <div className='absolute inset-0 left-8'>
                                    <Shape3D />
                                </div>
                            }
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LeftPanelItems;
