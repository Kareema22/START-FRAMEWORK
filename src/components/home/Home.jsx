import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import avatar from '../../assets/avataaars.svg';

export default function Home() {
    return (
        <div className='flex  items-center  justify-center h-lvh bg-[#1abc9c]  w-full'>
            <div className='flex flex-col justify-center items-center text-white'>
                <img src={avatar} className='w-60 mb-5' />
                <h2 className='font-bold text-4xl mb-3'>START FRAMEWORK</h2>
                <div className="flex items-center justify-center w-[100%]">
                    <div className='w-[20%] mx-4 h-1 bg-white' ></div>
                    <FontAwesomeIcon icon={faStar} />
                    <div className='w-[20%] mx-4 my-3 h-1  bg-white' ></div>
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>

    )
}