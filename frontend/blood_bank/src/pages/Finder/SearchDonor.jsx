import React from 'react'
import { useLocation } from "react-router-dom";
import { axiosGet, axiosPost } from '../../AxiosOperations';
import { useState,useEffect } from 'react';
import Spinner1 from '../../pages/spinners/Spinner1';
import testImg from '/user.png';

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
}

export default SearchDonor
