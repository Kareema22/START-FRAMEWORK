import { faFacebook, faLinkedin, faTwitter, } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


export default function Footer() {
    return (
        <footer className=" text-white">
            <div className='bg-[#2c3e50] p-20'>
                <div className="flex w-[100%] container justify-between items-center mx-auto ">
                    <div className="flex w-1/3 flex-col justify-center text-center items-center">
                        <h3 className="font-semibold text-2xl mb-5">LOCATION</h3>
                        <p className="mb-5">2215 John Daniel Drive</p>
                        <p >Clark, MO 65243</p>
                    </div>
                    <div className="flex  w-1/3 flex-col justify-center text-center items-center">
                        <h3 className="font-semibold text-2xl mb-5">AROUND THE WEB</h3>
                        <div className="icons">
                            <FontAwesomeIcon className='p-2 mr-2 border rounded-[50%]' icon={faFacebook} />
                            <FontAwesomeIcon className='p-2 mr-2  border rounded-[50%]' icon={faTwitter} />
                            <FontAwesomeIcon className='p-2 mr-2  border rounded-[50%]' icon={faLinkedin} />
                            <FontAwesomeIcon className='p-2 mr-2  border rounded-[50%]' icon={faGlobe} />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-col justify-center text-center  items-center">
                        <h3 className="font-semibold text-2xl mb-5">ABOUT FREELANCER</h3>
                        <p > Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                    </div>
                </div>
            </div>

            <div className=' text-center p-3 bg-[#1a252f]' >
                <p>Copyright © Your Website 2021</p>
            </div>
        </footer>

    )
}