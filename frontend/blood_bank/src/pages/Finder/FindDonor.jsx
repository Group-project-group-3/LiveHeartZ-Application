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

  //This function seems to be responsible for fetching a list of donors based on the selected blood group, province, and district.
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

  //It likely intends to handle some functionality related to opening a report box,
  const openReportBox = () => {

  }

  return(
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

       {
        donorList.length && available && <center className='text-[26px] homepara text-red-400 underline'>Your blood s avilable at our blood bank you can collect or you can contact thease donors.</center>
      }

        {donorList.length !== 0 ? (
        loading ? (<Spinner1 />) : (<div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4'>
          {donorList.map(item => (
            <div className='flex justify-center p-[20px]' key={item._id}>
              <div className='xl:w-[500px] lg:w-[500px] md:w-[500px] h-[300px] border-2 bg-slate-200  '>
                <div className='flex justify-around  '>
                  <div className='w-[200px] h-[200px]  mt-[20px]  '><span><img src={testImg} alt="" /></span></div>
                  <div className='w-[200px] h-[200px] mt-[40px]  ' >
                    <div>
                      <span key='1' className='cardData text-[24px] font-bold'>{item.fullname}</span>
                      <i className="fa-solid fa-phone"></i><span key='2' className='cardData'>{item.mobile}</span>
                      <i className="fa-solid fa-location-dot"></i><span key='3' className='cardData'>{item.district} , {item.province}.</span>
                      <i className="fa-regular fa-calendar"></i><span key='5' className='cardData'>Last Donation : {item.lastdonationdate}</span>
                    </div>
                  </div>
                </div>

                
                {
                  verifyuser ? (<div className='grid grid-cols-2'>
                    <div>
                      {chatVisible && <Chat name={item.fullname} id={item._id} />}
                    </div>
                    <div>
                      {chatVisible && <Button style={{ backgroundColor: '#BC005A', border: '2px solid white',color: 'white' }} onClick={() => sendMail(item._id)} className='w-full'>
                        Request Email
                      </Button>}

                    </div>
                  </div>) : (
                    <div className='flex justify-between '>
                      <Link className='text-[16px] homepara text-green-800 font-bold w-full flex justify-center ' style={{ color: '#BC005A', border: '2px solid #BC005A' }} to={'/requestblood'}>SEND REQUEST</Link>
                      <Report name={item.fullname} email={item.email} />

                    </div>)
                }

              </div>
            </div>
          ))}
        </div>)

        ) : (
        <div className='flex justify-center w-full/2 h-[500px] items-center bg-slate-200 m-[20px] homepara'>No Available Donor/Not Select All Fields</div>
      )}

      <Footer navLinks1={socialLinks} navLinks2={contactData} />
    </div>  
  );           
}
export default FindDonor;


