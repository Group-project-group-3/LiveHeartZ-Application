import React, { useState } from 'react'
import { useLocation } from "react-router-dom";

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { axiosPost } from '../AxiosOperations';
import { useNavigate } from 'react-router-dom';

const OtpReceive = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const formdata = searchParams.get("formdata");

  const [otp, setOtp] = useState(null);
  var decodedFormData = JSON.parse(formdata);
  
  }
  return (
    <div className='flex justify-center items-center h-screen bg-stone-100 '>

      <div className=' border-8 p-[75px]' >

      </div>
    </div>
  )


export default OtpReceive
