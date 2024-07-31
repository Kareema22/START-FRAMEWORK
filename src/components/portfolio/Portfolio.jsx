import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import port1 from '../../assets/port1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';



export default function Portfolio() {

    const handleOnMouseEnter = (id) => {
        document.getElementById(id).classList.remove('hidden')
    }


    const handleOnMouseLeave = (id) => {
        document.getElementById(id).classList.add('hidden')

    }

    return (
        <div className='flex h-lvh bg-white  w-full'>
            <div className='flex flex-col  text-center mx-auto my-5  text-[#2c3e50] relative top-[10%] w-[80%]'>
                <h2 className='font-bold text-4xl mb-3'>PORTFOLIO COMPONENT</h2>
                <div className="flex items-center text mx-auto justify-center w-[50%]">
                    <div className='w-[10%] mx-4 h-1 bg-[#2c3e50]' ></div>
                    <FontAwesomeIcon icon={faStar} />
                    <div className='w-[10%] mx-4 my-3 h-1  bg-[#2c3e50]' ></div>
                </div>
                <div className="flex  w-[90%] mx-auto flex-wrap">
                    <div className="row w-1/3 cursor-pointer  p-5">
                        <div onMouseLeave={() => handleOnMouseLeave('layer-1')}
                            onMouseEnter={() => handleOnMouseEnter('layer-1')}
                            className="relative row w-full h-full">
                            <img src={port1} className='rounded-md w-100 h-[100%]' />
                            <div id='layer-1' className="hidden absolute rounded-md start-0 min-w-100 top-0 bottom-0 end-0 bg-red-900 flex justify-center items-center bg-[#1abc9ce6] bg-opacity-60">
                                <FontAwesomeIcon className=' text-white' size='6x' icon={faPlus} />
                            </div>
                        </div>
                    </div>
                    <div className="row w-1/3 cursor-pointer p-5 ">
                        <div
                            onMouseLeave={() => handleOnMouseLeave('layer-2')}
                            onMouseEnter={() => handleOnMouseEnter('layer-2')}
                            className="relative row w-full h-full"
                        >
                            <img src={port2} className='rounded-md w-100 h-[100%]' />
                            <div id='layer-2' className=" hidden absolute rounded-md start-0 min-w-100 top-0 bottom-0 end-0 bg-red-900 flex justify-center items-center bg-[#1abc9ce6] bg-opacity-60">
                                <FontAwesomeIcon className=' text-white' size='6x' icon={faPlus} />
                            </div>
                        </div>
                    </div>
                    <div className="row w-1/3 cursor-pointer p-5 ">
                        <div
                            onMouseLeave={() => handleOnMouseLeave('layer-3')}
                            onMouseEnter={() => handleOnMouseEnter('layer-3')}
                            className="relative row w-full h-full"
                        >
                            <img src={port3} className='rounded-md w-100 h-[100%]' />
                            <div id='layer-3' className=" hidden absolute rounded-md start-0 min-w-100 top-0 bottom-0 end-0 bg-red-900 flex justify-center items-center bg-[#1abc9ce6] bg-opacity-60">
                                <FontAwesomeIcon className=' text-white' size='6x' icon={faPlus} />
                            </div>
                        </div>
                    </div>
                    <div className="row w-1/3 cursor-pointer p-5 ">
                        <div
                            onMouseLeave={() => handleOnMouseLeave('layer-4')}
                            onMouseEnter={() => handleOnMouseEnter('layer-4')}
                            className="relative row w-full h-full"
                        >
                            <img src={port1} className='rounded-md w-100 h-[100%]' />
                            <div id='layer-4' className=" hidden absolute rounded-md start-0 min-w-100 top-0 bottom-0 end-0 bg-red-900 flex justify-center items-center bg-[#1abc9ce6] bg-opacity-60">
                                <FontAwesomeIcon className=' text-white' size='6x' icon={faPlus} />
                            </div>
                        </div>
                    </div>
                    <div className="row w-1/3 cursor-pointer p-5 ">
                        <div
                            onMouseLeave={() => handleOnMouseLeave('layer-5')}
                            onMouseEnter={() => handleOnMouseEnter('layer-5')}
                            className="relative row w-full h-full"
                        >
                            <img src={port2} className='rounded-md w-100 h-[100%]' />
                            <div id='layer-5' className="hidden absolute rounded-md start-0 min-w-100 top-0 bottom-0 end-0 bg-red-900 flex justify-center items-center bg-[#1abc9ce6] bg-opacity-60">
                                <FontAwesomeIcon className=' text-white' size='6x' icon={faPlus} />
                            </div>
                        </div>
                    </div>
                    <div className="row w-1/3 cursor-pointer p-5">
                        <div
                            onMouseLeave={() => handleOnMouseLeave('layer-6')}
                            onMouseEnter={() => handleOnMouseEnter('layer-6')}
                            className="relative row w-full h-full"
                        >
                            <img src={port3} className='rounded-md w-100 h-[100%]' />
                            <div id='layer-6' className="hidden absolute rounded-md start-0 min-w-100 top-0 bottom-0 end-0 bg-red-900 flex justify-center items-center bg-[#1abc9ce6] bg-opacity-60">
                                <FontAwesomeIcon className=' text-white' size='6x' icon={faPlus} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
