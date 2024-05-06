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
}

export default SearchDonor
