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

  useEffect(() => {

    axiosGet('home/count')

      .then(data => {

        setBloodCount(data.data);

      })
      .catch(error => {

        console.error('Error fetching data:', error);
      });


    return () => {
      // Cleanup code goes here
    };
  }, []);

  useEffect(() => {
    getDistricts();
  }, );

  const [totalDonorsCount, setTotalDonorsCount] = React.useState([]);

    useEffect(() => {
      axiosGet('donor/total-donors-count')
            .then(response => {
                const data = response.data;
                if (data.success) {
                    setTotalDonorsCount(data.count);
                } else {
                    console.error('Error fetching total donors count:', data.message);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
  
    const [totalRequestsCount, setTotalRequestsCount] = React.useState([]);

useEffect(() => {
  axiosGet('finder/total-requests-count') // Assuming your endpoint is '/api/total-requests-count'
        .then(response => {
            const data = response.data;
            if (data.success) {
                setTotalRequestsCount(data.count);
            } else {
                console.error('Error fetching total requests count:', data.message);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}, []);

return (
    <div>
      <div>
        <Header navLinks={navLinks} />
      </div>
      
      <div className='flex justify-evenly   p-[20px] '>
        <div className='mt-[50px] w-[750px] p-[20px] '>
          <h1 className='text-pink-600 text-[50px] font-bold h1Text'>Donate Blood,</h1>
          <h1 className='text-pink-600 text-[50px] h1Text'>Give the</h1>
          <h1 className='text-pink-600 text-[50px] h1Text'>Gift of</h1>
          <h1 className='text-pink-600 text-[50px] h1Text'>Life.</h1>
          <p className='text-[20px] homepara'> By donating blood with LiveHeartZ, many lives are saved and hope
            is given to many whose situation may otherwise be hopeless.
            Blood donors give such patients a second chance of life.</p>
        </div>

        <div className='mt-[50px] w-[500px] flex justify-evenly pb-[20px] bg-gray-200'>
          <form>
            <div className='flex justify-center pt-[30px] font-bold font-[20px]'>
              Search Blood
            </div>
            <div className='mt-[20px]'>
              <Box sx={{ minWidth: 220 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Blood Group</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    
                    style={{ background: 'white' }}
                    

                    id='bloodgroup-select'
                    value={formData.bloodgroup}
                    label='Select Blood'
                    onChange={handleBloodGroupChange}

                  >
                    <MenuItem value='Select'>Blood Group</MenuItem>
                    <MenuItem value='A-'>A-</MenuItem>
                    <MenuItem value='A+'>A+</MenuItem>
                    <MenuItem value='AB-'>AB-</MenuItem>
                    <MenuItem value='AB+'>AB+</MenuItem>
                    <MenuItem value='B-'>B-</MenuItem>
                    <MenuItem value='B+'>B+</MenuItem>
                    <MenuItem value='O-'>O-</MenuItem>
                    <MenuItem value='O+'>O+</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className='mt-[20px]'>
              <Box sx={{ minWidth: 220 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Province</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    
                    style={{ background: 'white' }}
                  
                    
                    id='province-select'
                    value={formData.province}
                    label='Select Province'
                    onChange={handleProvinceChange}

                  >
                    <MenuItem value='Select'>Province</MenuItem>
                    {Province.map((province) => (
                      <MenuItem key={province.name} value={province.name}>
                        {province.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className='mt-[20px]'>
              <Box sx={{ minWidth: 220 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select District</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    
                    inputProps={{ className: 'bg-white' }}
                    label="Select District"
                    style={{ background: 'white' }}
      
                    id='district-select'
                    value={formData.district}
                    
                    onChange={handleDistrictChange}
                  >
                    <MenuItem value='Select'>District</MenuItem>
                    {district.map((dis) => (
                      <MenuItem key={dis} value={dis}>
                        {dis}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className='flex justify-center mt-[20px]'>
              <Stack direction="row" spacing={2}>
                
                <Button variant='outlined' style={{ color: '#BC005A', border: '2px solid #BC005A' }} onClick={() => {
                  if (formData.bloodgroup != 'Select' && formData.province != 'Select') {
                    navigetor(`/search?data=${encodeURIComponent(JSON.stringify(formData))}`)
                  } else {
                    alert("Please Select All Feilds");
                  }
                }}>
                  Find Blood
                </Button>
              </Stack>
            </div>
          </form>
        </div>
      </div>

      <div className='w-[100] h-[400px]  mt-[50px] m-[10px] flex justify-center' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

        <div className='w-[600px] p-[30px] ms-[190px]'>
          <h2 className='text-pink-800 text-[50px] font-bold h2Text '>Give Blood</h2>
          <h2 className='text-pink-800 text-[50px] font-bold h2Text'>Save A LIFE</h2>
          <p className='homepara mt -[25px] mb-[25px] text-white'>If a consumer of a REST service needs to hard-code all the resource URLs,
            <br />then it is tightly then it is loosely coupled. There is no tight. There is no tight<br />
            dependency on the URI structure, <br />as it is specified and used from the response.</p>

          <Stack direction="row" spacing={2}>
            <Button variant="outlined" component={Link} to={"/register"} style={{ color: '#BC005A', border: '2px solid #BC005A' }}>Join Us</Button>
          </Stack>


        </div>

      </div>
      
      <div className='mt-10'>
        <Footer navLinks1={socialLinks} navLinks2={contactData} />
      </div>
    </div>
  )
  
}

export default Home
