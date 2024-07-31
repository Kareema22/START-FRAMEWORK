import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function About() {
    return (
        <div className='flex  items-center  justify-center h-lvh bg-[#1abc9c]  w-full'>
            <div className='flex flex-col justify-center items-center text-white w-[100%]'>
                <h2 className='font-bold text-4xl mb-3'>ABOUT COMPONENT</h2>
                <div className="flex items-center justify-center w-[20%]">
                    <div className='w-[20%] mx-4 h-1 bg-white' ></div>
                    <FontAwesomeIcon icon={faStar} />
                    <div className='w-[20%] mx-4 my-3 h-1  bg-white' ></div>
                </div>
                <div className='flex items-center justify-center w-[60%]'>
                    <p className='w-[50%] px-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </p>
                    <p className='w-[50%] px-2'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                    </p>
                </div>
            </div>
        </div>

    )
}