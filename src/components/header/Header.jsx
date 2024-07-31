import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    const defaultLinksStyle = 'cursor-pointer p-2'

    const handleLinkOnClick = (target) => {
        const allLiElements = [...document.getElementById('links').getElementsByTagName('a')]

        allLiElements.forEach(element => {
            element.className = defaultLinksStyle
        });

        const styleCLasses = 'cursor-pointer p-2 bg-[#1abc9c] rounded'

        target.className = styleCLasses
    }

    return (
        <nav className="fixed z-[1000000] right-0 left-0 top-0 bg-[#2c3e50] h-[10%] text-white ">
            <div className='flex items-center justify-between py-7 container mx-auto uppercase' >
                <a href='/#' className='font-bold text-3xl'>Start Framework</a>
                <ul id='links' className='menu flex font-semibold  text-l gap-6'>
                    <li onClick={({ target }) => handleLinkOnClick(target)}>
                        <Link className={defaultLinksStyle} to='/about'>About</Link>
                    </li>
                    <li onClick={({ target }) => handleLinkOnClick(target)}>
                        <Link className={defaultLinksStyle} to='/portfolio'>Portfolio</Link>
                    </li>
                    <li onClick={({ target }) => handleLinkOnClick(target)}>
                        <Link className={defaultLinksStyle} to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}