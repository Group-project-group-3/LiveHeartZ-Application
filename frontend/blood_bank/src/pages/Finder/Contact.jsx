import React from 'react'

import Header from '../../components/common/Header';
import { navLinks } from '../../assets/data/HeaderData';
import { socialLinks,contactData } from '../../assets/data/FooterData';
import Footer from '../../components/common/Footer';

import { FaPhone,FaLocationDot } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { MdEmail } from "react-icons/md";


const Contact = () => {
    return (
      <div>
        <div>
          <Header navLinks={navLinks} />
        </div>
        <div>
        <div className="bg-gray-100 p-8">
          <div className="lg:flex">
            <div className="w-full lg:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold text-center mb-8">Contact Us</h2>
          <div className="bg-white shadow-lg rounded-lg p-[20px]">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Contact Details</h3>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 m-[10px]">
              <input type="text" placeholder="Enter name" className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-pink-600" />
              <input type="tel" placeholder="Enter mobile number" className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-pink-600" />
              <input type="text" placeholder="Enter subject" className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-pink-600" />
              <input type="email" placeholder="Enter E-mail" className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-pink-600" />
              <textarea placeholder="Enter your message" className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-pink-600"></textarea>
            </div>
            <button className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 focus:outline-none m-[10px]">SEND</button>
          </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold text-center mt-[20px]">Contact Information</h2>
          <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
  
      <div className="text-center m-[20px]">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-center">
        <MdEmail className='text-[60px] ms-[55px]' />
        </a>
        <p className="text-sm font-bold">Email</p>
        <p>LiveHeartZ@gmail.com</p>
      </div>
      <div className="text-center  m-[20px]">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600">
          <FaPhone className='text-[60px]  ms-[55px]' />
        </a>
        <p className="text-sm font-bold">Phone</p>
        <p>+94117895624</p>
      </div>
      <div className="text-center m-[20px]">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600">
          
          <CgWebsite className='text-[60px] text-center ms-[55px]' />
        </a>
        <p className="text-sm font-bold">Website</p>
        <p>www.LiveHeartZ.com</p>
      </div>
      <div className="text-center m-[20px]">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600">
          <FaLocationDot className='text-[60px] ms-[55px]'/>
        </a>
        <p className="text-sm font-bold">Location</p>
        <p>No 25/6,Mannar Road,</p>
        <p>Puthiyasalambaigulam,</p>
        <p>Vavuniya</p>
      </div>
    </div>
  </div>
          </div>
          </div>
    
         
  
        </div>
        </div>
        <div>
        <Footer navLinks1={socialLinks} navLinks2={contactData} />
        </div>
      </div>
    )
  }
  
  export default Contact