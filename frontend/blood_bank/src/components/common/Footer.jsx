import React from "react";
import { NavLink, Link } from 'react-router-dom';
import header_logo from '../../assets/images/header/LiveHeartZ.png';


const Footer = (props) => {
  return (
    <footer className="bg-black text-gray-300 p-4 md:p-6">
      <div className="flex flex-wrap justify-evenly">


        <div className='flex flex-col items-center mb-4'>
          <span className="font-bold text-[25px] text-pink-700 mb-2">Follow Us</span>
          {props.navLinks1.map((link, index) =>
            <NavLink to={link.path} key={index} className="mt-2">{link.icon}</NavLink>
          )}
        </div>


        <div className='flex flex-col items-center mb-4'>
          <span className="font-bold text-[25px] text-pink-700 mb-2">Contact Us</span>
          {props.navLinks2.map((link, index) =>
            <span key={index} className="mt-2 text-center">{link.display}</span>
          )}
        </div>


        <div className='w-full md:w-[150px] flex items-center justify-center mb-4 md:mb-0'>
          <Link to="/" component={Link}>
            <img className="w-44 h-34" src={header_logo} alt="Header Logo" />
          </Link>
        </div>
      </div>


      <hr className="my-4 md:my-6" />
      <div className="text-center">
        <p className="text-xs md:text-sm">&copy; 2023 All Rights Reserved 2024</p>
        <p className="text-xs md:text-sm">Designed & Developed by <span className="text-pink-700">Group-03</span></p>
      </div>
    </footer>

  );
};

export default Footer;
