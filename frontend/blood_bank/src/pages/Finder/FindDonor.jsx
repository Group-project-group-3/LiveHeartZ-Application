import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { navLinks } from '../../assets/data/HeaderData';
import { socialLinks, contactData } from '../../assets/data/FooterData';
import Chat from '../../popups/Chat';
import { axiosGet, axiosPost } from '../../AxiosOperations';
import { useLocation } from "react-router-dom";
import testImg from '/user.png';
import { Link } from 'react-router-dom';
import Spinner1 from '../../pages/spinners/Spinner1';
import Report from '../Donar/popup/Report.jsx';
import Province from '../../assets/data/SelectData';




const FindDonor = () => {

  const [verifyuser, setVerifyUser] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const verify = searchParams.get("verify");
  const requesterData = searchParams.get("data");
  var decodedFormData = JSON.parse(requesterData);

  useEffect(() => {

    if (verify == "true") {
      setVerifyUser(true);
    }


    return () => {
      // Cleanup code goes here
    };
  }, []);


  const [districts, setDistricts] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [donorList, setDonorList] = useState([]);
  const [chatVisible, setChatVisible] = useState(false);
  const [available, setAvailable] = useState(false);

  const [formData, setFormData] = useState({
    bloodgroup: 'Select',
    province: 'Select',
    district: 'Select',
  });

  const bloodbankCheck = () => {
    try {
      axiosGet(`home/bloodbank/availability/${formData.bloodgroup}`).then((data) => {
        if (formData.district == "Vavuniya" & data.data.available & verifyuser) {
          setAvailable(true);
        } else {
          setAvailable(false);
        }

      });


    } catch (error) {

    }
  }

  const handleChnage = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  const getDistrcts = (e) => {

    Province.map(pr => {
      if (pr.name === e.target.value) {
        setDistricts(pr.districts);
      }
    }
    )

  };

  const sendMail = async (id) => {

    try {
      await axiosPost('donor/sendemail', { data: decodedFormData, receiverId: id }).then(alert("Email Send Succsessfully"));


    } catch (error) {
      console.log(error)
    }

  };


  const validateFormData = () => {
    const errors = {};
    if (formData.bloodgroup.trim() === "Select") {
      errors.bloodgroup = 'BloodGroup is required';
    }
    if (formData.province.trim() === "Select") {
      errors.province = 'Province is required';
    }
    if (formData.district.trim() === "Select") {
      errors.district = 'District is required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const getDonorsList = async () => {
    if (validateFormData()) {
      await axiosGet(`donor/finddonor/${formData.bloodgroup}/${formData.province}/${formData.district}`)
        .then(data => {
          bloodbankCheck();
          setDonorList(data.data);
        }).then(setInterval(() => {
          setLoading(false);
        }, 500))
        .then(() => {
          // Show chat after fetching donor list
          setChatVisible(true);
        });
    }
  };

  const openReportBox = () => {

  }

  return (
    <div>
      <Header navLinks={navLinks} />
      <div className='flex flex-col'>
        <form>
          <div className='flex sm:min-w-500 justify-center pt-[20px] font-bold '>
            Search Blood
          </div>
          <div className='grid lg:grid-cols-3 gap-4  ml-[150px] mr-[150px] p-[25px] '>
            <div>
              <label >Blood Group</label>
              <select name="bloodgroup" onChange={handleChnage} className='w-full h-[40px] bg-slate-100'>
                <option value="Select">Select</option>
                <option value='A-'>A-</option>
                <option value="A+">A+</option>
                <option value="AB-">AB-</option>
                <option value="AB+">AB+</option>
                <option value="B-">B-</option>
                <option value="B+">B+</option>
                <option value="O-">O-</option>
                <option value="O+">O+</option>
              </select>
               {errors.bloodgroup && <span className="text-red-500">{errors.bloodgroup}</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-[5px]">
                Province
              </label>
              <select name="province" onChange={(e) => {
                handleChnage(e); getDistrcts(e);
              }} className='w-full h-[40px] bg-slate-100'>
                <option value="Select">Select</option>
                {
                  Province.map((province) =>
                    <option value={province.name}>{province.name}</option>
                  )
                }
              </select>
              {errors.province && <span className="text-red-500">{errors.province}</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-[5px]">
                Province
              </label>
              <select name="province" onChange={(e) => {
                handleChnage(e); getDistrcts(e);
              }} className='w-full h-[40px] bg-slate-100'>
                <option value="Select">Select</option>
                {
                  Province.map((province) =>
                    <option value={province.name}>{province.name}</option>
                  )
                }
              </select>
              {errors.province && <span className="text-red-500">{errors.province}</span>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-[5px]">
                District
              </label>
              <select name="district" onChange={handleChnage} className='w-full h-[40px] bg-slate-100'>
                <option value="Select">Select</option>
                {

                  districts.map(dis =>
                    <option value={dis}>{dis}</option>
                  )

                }
              </select>
              {errors.district && <span className="text-red-500">{errors.district}</span>}
            </div>
            <div className='flex'>
              <Stack direction="row" spacing={2}>
                
                <Button variant="outlined" style={{ color: '#BC005A', border: '2px solid #BC005A' }} onClick={getDonorsList} >FIND DONARS</Button>
              </Stack>
            </div>
          </div>
        </form>
      </div>

            
   
  );
}


