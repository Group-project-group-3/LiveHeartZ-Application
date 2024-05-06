import React from 'react';
import Header from '../../components/common/Header';
import { navLinks } from '../../assets/data/HeaderData';
import { socialLinks, contactData } from '../../assets/data/FooterData';
import Footer from '../../components/common/Footer';
import bloodnews from '../../assets/images/News/bloodnews.webp';


const News = () => {
  return (
    <div>
      <div>
        <Header navLinks={navLinks} />
      </div>

      <div className='m-[50px]'>
        <div className='   p-[20px] '>
          <div className='flex justify-evenly mt-[10px]  p-[20px] '>
            <h1 className='text-black-500 text-[40px] font-bold h1Text'>Donating Blood</h1>
          </div>
          <div className='ps-[20px]'>
            <h4 className='text-black-500 text-[30px] font-bold h4Text'>Advantages of Blood Donation</h4>
          </div>
        </div>
      
    </div>
  )
}
