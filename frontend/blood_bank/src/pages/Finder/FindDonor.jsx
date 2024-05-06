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

 
            
}
export default FindDonor;


