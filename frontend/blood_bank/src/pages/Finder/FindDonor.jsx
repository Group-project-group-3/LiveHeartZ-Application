//import the packages for the use
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

  const [verifyuser, setVerifyUser] = useState(false);//Here, it initializes verifyuser state variable with false value and provides a function setVerifyUser to update its value.
  const location = useLocation();//useLocation() is a custom hook likely from a library such as React Router) used to access the current URL location in a React component.
  const searchParams = new URLSearchParams(location.search);//new URLSearchParams(location.search) creates a new URLSearchParams object from the query parameters in the current URL.
  const verify = searchParams.get("verify");//It  retrieves the value of the query parameter named "verify" from the URL, if it exists.
  const requesterData = searchParams.get("data");//It retrieves the value of the query parameter named "data" from the URL, if it exists.
  var decodedFormData = JSON.parse(requesterData);//It attempts to parse the value of the "data" query parameter as JSON. requesterData is the value retrieved from the URL.


//This part of the code is utilizing the useEffect hook
  //and if the URL parameter "verify" is set to "true", it updates the verifyuser state variable to true
useEffect(() => {
    if (verify == "true") {
      setVerifyUser(true);
    }


  //It is an optional cleanup function that runs when the component unmounts or before the effect runs again. 
  return () => {
      // Cleanup code goes here
    };
  }, []);


  //This code sets up various pieces of information that a React component might need:
  const [districts, setDistricts] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [donorList, setDonorList] = useState([]);
  const [chatVisible, setChatVisible] = useState(false);
  const [available, setAvailable] = useState(false);

  //This state variable can be used to manage form data in a React component, 
  //typically used for capturing user input such as selecting a blood group, province, and district
  const [formData, setFormData] = useState({
    bloodgroup: 'Select',
    province: 'Select',
    district: 'Select',
  });

  // making an asynchronous HTTP request using Axios to check the availability of blood in a blood bank based on the selected blood group 
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

  //function is used to handle changes in form input fields. 
  //It takes an event object e as a parameter, typically triggered by a user's interaction with an input field.
  const handleChnage = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  //This getDistricts function seems to be designed to get the districts corresponding to the selected province.
  const getDistrcts = (e) => {

    Province.map(pr => {
      if (pr.name === e.target.value) {
        setDistricts(pr.districts);
      }
    }
    )

  };

  //This sendMail function is an asynchronous function that sends an email to a recipient identified by id
  const sendMail = async (id) => {

    try {
      await axiosPost('donor/sendemail', { data: decodedFormData, receiverId: id }).then(alert("Email Send Succsessfully"));


    } catch (error) {
      console.log(error)
    }

  };


  // It checks if the selected options for blood group, province, and district are valid (not equal to "Select").
  //If any of these fields are not selected, it sets an appropriate error message in the errors object.
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


