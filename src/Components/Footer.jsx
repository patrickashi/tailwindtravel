import React from "react"
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
  } from 'react-icons/fa';

const Footer = () => {
    return ( 
        <div className="w-full bg-gray-100 py-16">
            <div className="max-w-[1240px] flex flex-col mx-auto px-4">
                <div className="sm:flex justify-between text-center items-center">
                    <h1>BEACHES.</h1>
                    <div className="flex justify-between w-full sm:max-w[200px] my-4">
                        <FaFacebook className='icon' />
                        <FaTwitter className='icon' />
                        <FaYoutube className='icon' />
                        <FaPinterest className='icon' />
                        <FaInstagram className='icon' />
                    </div>
                </div>

                <div className="flex justify-between">
                    <ul className="lg:flex">
                        <li>About</li>
                        <li>Patnership</li>
                        <li>Careers</li>
                        <li>Newsroom</li>
                        <li>Advertising</li>
                    </ul>

                    <ul className="text-right lg:flex">
                        <li>About</li>
                        <li>Patnership</li>
                        <li>Careers</li>
                        <li>Newsroom</li>
                        <li>Advertising</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;