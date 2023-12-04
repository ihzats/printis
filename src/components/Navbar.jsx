import React, { useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Home'); // Item menu yang aktif

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setActiveItem(item);
        setIsOpen(false);
    };
    return (
        <div>
            <nav className="fixed w-full bg-primary p-4 z-10 shadow-md">
                <div className="mx-auto flex justify-between items-center">
                        <div className="text-white text-2xl font-bold font-chillax lg:mx-12">PRINTI<span className='text-amber-300'>S</span></div>
                    <div className="hidden md:flex space-x-8 mx-8 ">
                        <Link
                            to="/"
                            className={`text-white font-mono ${activeItem === 'Home' ? 'font-bold' : ''}`}
                            onClick={() => handleItemClick('Home')}
                        >
                            Home
                        </Link>
                        <Link
                            to="/"
                            className={`text-white font-mono ${activeItem === 'About' ? 'font-bold' : ''}`}
                            onClick={() => handleItemClick('About')}
                        >
                            About us
                        </Link>
                        <Link
                            to="/"
                            className={`text-white font-mono ${activeItem === 'About' ? 'font-bold' : ''}`}
                            onClick={() => handleItemClick('Services')}
                        >
                            Services
                        </Link>
                        <Link
                            to="/"
                            className={`text-white font-mono ${activeItem === 'About' ? 'font-bold' : ''}`}
                            onClick={() => handleItemClick('Services')}
                        >
                            Testimoni
                        </Link>
                        <Link
                            to="/"
                            className={`text-white font-mono ${activeItem === 'Booking' ? 'font-bold' : ''}`}
                            onClick={() => handleItemClick('Gallery')}
                        >
                            Gallery
                        </Link>
                        <Link
                            to="/"
                            className={`text-white font-mono ${activeItem === 'Contact' ? 'font-bold' : ''}`}
                            onClick={() => handleItemClick('Contact')}
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleNavbar} className="text-white font-mono text-bold">
                            {isOpen ? <BsX className='text-lg' /> : <BsList className='text-lg' />}
                        </button>
                    </div>
                </div>
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="text-white p-4 space-y-2">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Testimoni</Link></li>
                        <li><Link to="/">Gallery</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
