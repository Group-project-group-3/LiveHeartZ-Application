import React, { useState,useEffect } from 'react'

import { Link } from 'react-router-dom';

import blooddonor from '../../assets/images/home/blooddonor.png';
import blooddrop from '../../assets/images/home/blooddrop.png';
import background from '../../assets/images/home/group-9@2x.png';
import Header from '../../components/common/Header';
import { navLinks } from '../../assets/data/HeaderData';
import { socialLinks, contactData } from '../../assets/data/FooterData';

import Footer from '../../components/common/Footer';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import donar from '../../assets/images/home/donar.png';
import hand from '../../assets/images/home/love-1@2x.png';
import donation from '../../assets/images/home/blooddonation-1@2x.png';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Province from '../../assets/data/SelectData';
import { useNavigate } from 'react-router-dom';
import { axiosGet } from '../../AxiosOperations';

import Spinner1 from '../../pages/spinners/Spinner1';

const Home = () => {
  const [bloodCount, setBloodCount] = React.useState([]);
  const [district, setDistrict] = useState([]);

  const navigetor = useNavigate();
  const [formData, setFormData] = useState({
    bloodgroup: 'Select',
    province: 'Select',
    district: 'Select'
  });

  const handleBloodGroupChange = (event) => {
    setFormData({ ...formData, bloodgroup: event.target.value });
  };

  const handleProvinceChange = (event) => {
    setFormData({ ...formData, province: event.target.value });
  };
  const handleDistrictChange = (event) => {
    setFormData({ ...formData, district: event.target.value });
  };

  const getDistricts = () => {

    Province.map((pro) => {
      if (pro.name == formData.province) {
        setDistrict(pro.districts);
      }
    })


  }
}

export default Home
