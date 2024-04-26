import React, { useState } from 'react'
import { useLocation } from "react-router-dom";

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";
import { axiosPost } from '../AxiosOperations';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OtpSend = () => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const formdata = searchParams.get("formdata");


    var decodedFormData = JSON.parse(formdata);


    const [inputemail, setInputEmail] = useState(0);

    const navigetor = useNavigate();

    const getEmail = (e) => {

        setInputEmail(e.target.value);

    }
}

export default OtpSend
