import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="Company Logo" />

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-7 text-white'>
          <li><a href="#Home" className='cursor-pointer hover:text-gray-400'>Home</a></li>
          <li><a href="#About" className='cursor-pointer hover:text-gray-400'>About</a></li>
          <li><a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a></li>
          <li><a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a></li>
        </ul>

        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>
          Sign up
        </button>

        {/* Mobile menu button */}
        <img
          src={assets.menu_icon}
          alt="Menu"
          className='md:hidden w-7 cursor-pointer'
          onClick={() => setShowMobileMenu(true)}
        />
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full h-full' : 'w-0 h-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all duration-300`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className='w-6'
            alt=""
          />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a onClick={() => setShowMobileMenu(false)} href="#Home" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
