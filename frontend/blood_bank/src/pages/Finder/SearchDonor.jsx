import React from 'react'
import { useLocation } from "react-router-dom";
import { axiosGet, axiosPost } from '../../AxiosOperations';
import { useState, useEffect } from 'react';
import Spinner1 from '../../pages/spinners/Spinner1';
import testImg from '/user.png';
import Header from '../../components/common/Header';
import { navLinks } from '../../assets/data/HeaderData';
import { socialLinks, contactData } from '../../assets/data/FooterData';
import Footer from '../../components/common/Footer';
const SearchDonor = () => {
  const [donorList, setDonorList] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const requesterData = searchParams.get("data");
  var decodedFormData = JSON.parse(requesterData);

  useEffect(() => {

    getDonorsList().then(setInterval(() => {
      setLoading(false);
    }, 500))


    return () => {
      // Cleanup code goes here
    };
  }, []);

  const getDonorsList = async () => {


    try {
      const data = await axiosGet(`donor/finddonor/${decodedFormData.bloodgroup}/${decodedFormData.province}/${decodedFormData.district}`);
      setDonorList(data.data);


    } catch (error) {
      console.error('Error fetching donor list:', error);
    }

  };

  return (
    <div>
      <div>
        <Header navLinks={navLinks} />
      </div>
      <div><center className='text-[30px]'>Donors</center>

        <div>
          {donorList.length !== 0 ? (
            loading ? (<Spinner1 />) : (<div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4'>
              {donorList.map(item => (
                <div className='flex justify-center p-[20px]' key={item._id}>
                  <div className='xl:w-[500px] lg:w-[500px] md:w-[500px] h-[300px] border-2 bg-slate-200  '>
                    <div className='flex justify-around'>
                      <div className='w-[200px] h-[200px] mt-[20px]'>
                        <span><img src={testImg} alt="" /></span>
                      </div>
                      <div className='w-[200px] h-[200px] mt-[40px]'>
                        <div className='flex flex-col'>
                          <span key='1' className='cardData text-[24px] font-bold mb-3'>{item.fullname}</span>
                          <div className='flex flex-col'>
                            <div className='flex items-center mb-3'>
                              <i className="fa-solid fas fa-tint"> :</i>
                              <span key='2' className='cardData ml-2'>Blood Group: {item.bloodgroup}</span>
                            </div>
                            <div className='flex items-center mb-3'>
                              <i className="fa-solid fa-location-dot"></i>
                              <span key='3' className='cardData ml-2'>Address: {item.district}, {item.province}.</span>
                            </div>
                            <div className='flex items-center mb-3'>
                              <i className="fa-regular fa-calendar"></i>
                              <span key='5' className='cardData ml-2'>Last Donation: {item.lastdonationdate}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>




                  </div>
                </div>
              ))}
            </div>)

          ) : (
            <div className='flex justify-center w-full/2 h-[500px] items-center bg-slate-200 m-[20px] homepara'>No Available Donor/Not Select All Fields</div>
          )}
        </div>
      </div>
      <div>
        <Footer navLinks1={socialLinks} navLinks2={contactData} />
      </div>
    </div>

  )
}

export default SearchDonor
