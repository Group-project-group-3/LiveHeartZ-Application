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

        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 p-[10px]'>
          <div className='w-[430px] mb-[10px] ms-[10px] p-[10px] '>
            <img src={bloodnews} alt="Blood News" className="mx-auto w-full lg:w-5/6  h-auto md:h-[300px] "/>
          </div>
          <div className='m-[20px] p-[15px] mt-[10px] mb-[5] pt-[2px] pb-[5px]'>
            <div className='mt-[5px] p-[10px]' >
              <h6 className='text-pink-600 text-[20px] font-bold h6Text '>Donating blood can help people with many health conditions, such as those who:</h6>
            </div>
            <div>
              <ul class='text-[15px] p-[10px] md:list-disc'>
                <li >have sickle cell disease or another illness that affects the blood </li>
                <li>are undergoing cancer treatment</li> 
                <li>are undergoing surgery, such as cardiovascular or orthopedic surgery</li> 
                <li>have an inherited blood disorder</li> 
                <li>are undergoing a transplant </li>
                <li>need treatments involving plasma or other blood products</li> 
                <li>have internal or external bleeding due to an injury</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='m-[20px] p-[15px] mt-[10px] mb-[5] pt-[2px] pb-[5px]'>
          <h6 className='text-pink-600 text-[15px] font-bold h6Text mt-[10px]'>Benefits for the donor</h6>
          <p >For many people, blood donation offers many health benefits with few risks. The strict regulation of blood banks means that a donor can give their blood or plasma safely in the United States. Donated blood can save the lives of people in need. However, according to some medical professionals, it may also benefit the donor. The sections below will look at some benefits for the donor in more detail.</p>
        </div>

        <div className='m-[20px] p-[15px] mt-[5px] pt-[2px]'>
          <h6 className='text-pink-600 text-[15px] font-bold h6Text'>Identifying adverse health effects</h6>
          <p>Each person who donates blood completes a simple physical examination and blood test before giving blood. These are not in-depth tests, but they may help identify unknown health concerns, such as anemia or high or low blood pressure.<br/>
          The test will check the person’s: 
              <ul class='ps-[17px] md:list-disc'>
                <li>blood pressure </li>
                <li>body temperature </li>
                <li>heart rate </li>
                <li>hemoglobin, or iron, levels</li>
              </ul>
                 If the test reveals a problem, the person will not be able to donate blood. However, the results could be a first step toward seeking treatment.
          </p>
        </div>
    </div>
  )
}
