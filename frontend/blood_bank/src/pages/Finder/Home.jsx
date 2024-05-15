import React, { useState, useEffect } from 'react'

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
  },);

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
    <div className="overflow-x-hidden">
      <div>
        <Header navLinks={navLinks} />
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly p-8 lg:space-x-8">
        <div className="mt-16 sm:w-full lg:w-70% p-8">
          <h1 className='text-pink-600 text-[50px] font-bold h1Text'>Donate Blood,</h1>
          <h1 className='text-pink-600 text-[50px] h1Text'>Give the</h1>
          <h1 className='text-pink-600 text-[50px] h1Text'>Gift of</h1>
          <h1 className='text-pink-600 text-[50px] h1Text'>Life.</h1>
          <p className='text-[20px] homepara'> By donating blood with LiveHeartZ, many lives are saved and hope
            is given to many whose situation may otherwise be hopeless.
            Blood donors give such patients a second chance of life.</p>
        </div>
        <div className="sm:w-full lg:w-[60%] mt-16 mr-8 ml-8 p-6  flex justify-center bg-gray-200 ">
          <form >
            <div className='flex justify-center pt-[30px] font-bold font-[24px]'>
              Search Blood
            </div>
            <div className='mt-[30px]'>
              <Box sx={{ minWidth: 200 }}>
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
            <div className='mt-[30px]'>
              <Box sx={{ minWidth: 200 }}>
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
            <div className='mt-[30px]'>
              <Box sx={{ minWidth: 200 }}>
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
            <div className='flex justify-center mt-[30px]'>
              <Stack direction="row" spacing={4}>

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
      <div className='w-auto  mt-[30px] sm:mt-0 m-[25px] pt-[20px] p-[20px]  pb-[20px] flex justify-center items-center relative' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

        <div className=' p-[10px] sm:ms-[50px] md:ms-[100px]  mt-[30px] sm:items-center'>
          <h2 className='text-pink-800 text-[50px] font-bold h2Text '>Give Blood</h2>
          <h2 className='text-pink-800 text-[50px] font-bold h2Text'>Save A LIFE</h2>
          <p className='flex justify-center homepara mt -[25px] mb-[25px] text-white'>If a consumer of a REST service needs to hard-code all the resource URLs,
            <br />then it is tightly then it is loosely coupled. There is no tight. There is no tight<br />
            dependency on the URI structure, <br />as it is specified and used from the response.</p>
            <div className="lg:me-[250px] flex justify-center items-center">
  <Stack direction="row" spacing={2}>
    <Button
      centerRipplevariant="outlined"
      component={Link}
      to={"/register"}
      style={{ color: '#BC005A', border: '2px solid #BC005A' }}
    >
      Join Us
    </Button>
  </Stack>
</div>




        </div>

      </div>
      <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-20 m-[20px] p-[10px]'>
        <div className='border-2 p-[15px] flex flex-col items-center  bg-gray-200'>
          <div className='w-[270px] h-[200px] mb-[15px] bg-white flex justify-center items-center'>
            <img src={blooddrop} alt="Blood Drop" className="w-[150px]" />
          </div>

          <div className='text-center'>
            <h2 className='font-bold text-2xl mb-4'>REQUEST BLOOD</h2>
            <p className='homepara text-sm'>Some quick example text to build on the card title</p>
            <p className='homepara text-sm'>and make up the bulk of the card's content.</p>
            <a href="#" className='homepara text-sm block mt-4'>Go somewhere</a>
          </div>
          <div className='flex justify-center mt-6'>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" style={{ color: '#BC005A', border: '2px solid #BC005A' }} component={Link} to="/requestblood">Request Blood</Button>
            </Stack>
          </div>
        </div>
        <div className='border-2 p-[15px] flex flex-col items-center  bg-gray-200'>
          <div className='w-[270px] h-[200px] mb-[15px] bg-white flex justify-center items-center'>
            <img src={blooddonor} alt="Blood Donor" className="mx-auto w-[150px]" />
          </div>
          <div className='text-center'>
            <h2 className='font-bold text-2xl mb-4'>FIND DONOR</h2>
            <p className='homepara text-sm'>Some quick example text to build on the card title</p>
            <p className='homepara text-sm'>and make up the bulk of the card's content.</p>
            <a href="#" className='homepara text-sm block mt-4'>Go somewhere</a>
          </div>
          <div className='flex justify-center mt-6'>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" style={{ color: '#BC005A', border: '2px solid #BC005A' }} component={Link} to={`/finddonor?verify=${encodeURIComponent(false)}`}>Find Donor</Button>
            </Stack>
          </div>
        </div>


      </div>
      <hr className="border-b-2 border-pink-600  m-[25px]" />
      <div className='flex justify-center'>
        <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2  p-[30px]'>
          {
            bloodCount.map((item) =>
              <div className='w-[100px] h-[100px] border-2 m-[25px] flex justify-center items-center bg-slate-200' >
                <div className='w-14 h-14 rounded-full border border-gray-500 bg-white'>
                  <center className='text-pink-600 font-bold '>{item.type}</center>
                  <center className='homepara text-[15px] font-bold'>{item.count}</center>
                </div>
              </div>

            )
          }

        </div>
      </div>
      <hr className="border-b-2 border-pink-600  m-[25px]" />
      <div className='flex flex-col md:flex-row items-center m-4'>
        <div className='flex w-full md:w-2/5 lg:w-2/5 xl:w-2/5 mb-6 md:mb-0'>
          <img src={donar}></img>
        </div>
        <div className='flex flex-col w-full md:w-3/5 lg:w-3/5 xl:w-3/5 items-center p-10 md:items-start md:ms-6'>
          <h1 className='font-bold text-2xl mb-4'>
            Why should we donate blood...?
          </h1>
          <p className="text-sm md:text-base text-center md:text-left">
            Donating blood saves lives in medical treatments and emergencies, supporting community well-being. Regular donations are essential due to the short shelf life of blood components. The process is simple and safe, providing health benefits to donors. Blood donation events foster community bonding. This philanthropic act ensures a steady supply, preventing shortages and making a positive impact on lives.
          </p>
          <div className='m-[30px]'>
            <Button className='w-[150px] ' component={Link} to={"/register"} style={{ backgroundColor: '#BC005A', border: '2px solid white', color: 'white' }}>
              <b>Be A Donar</b>
            </Button>
          </div>


        </div>

      </div>
      <div className='w-[full] h-[280px] bg-pink-800 m-7 me-10 flex flex-col items-center justify-center'>
        <h1 className='font-bold text-[30px] p-4 text-white text-center'>
          “A few minutes of your time can give someone a lifetime.”
        </h1>
        <Button variant="outlined" component={Link} to={"/register"} style={{ color: 'white', border: '2px solid white' }}>REGISTER</Button>
      </div>
      <div className='flex items-center justify-center  p-[20px]'>
        <div className='text-center'>
          <h1 className='font-bold text-3xl p-4 text-pink-800'>
            LiveHeartZ
          </h1>
          <p>
            Help someone <span className='font-bold text-pink-600'>donate blood</span> and save a life.
          </p>
          <p>
            If a consumer of a REST service needs to hard-code all the resource URLs, then it is tightly then it is loosely coupled. There is no tight dependency on the URI structure, as it is specified and used from the response. Then it is tightly then it is loosely coupled.
          </p>
        </div>
      </div>

      <div className='flex flex-wrap justify-center p-8 items-center'>
        <div className='flex flex-col items-center justify-center m-4'>
          <div className='bg-gray-400 flex items-center justify-center w-[110px] h-[110px] m-[30px] rounded-full text-[40px]   '>
            <Link to="/register" component={Link}>
              <p className=' font-bold'>{totalDonorsCount}</p>
            </Link>
          </div>
          <p className='font-bold'>Registers</p>
        </div>
        <div className='flex flex-col items-center justify-center m-4'>
          <div className='bg-pink-700 flex items-center justify-center w-[110px] h-[110px] m-[30px] rounded-full '>
            <Link to="/register" component={Link}>
              <img src={hand} className='w-[60px]' alt="Hand" />
            </Link>
          </div>
          <p className='font-bold'>
            Be a donar
          </p>
        </div>

        <div className='flex flex-col items-center justify-center m-4'>
          <div className='bg-gray-400 flex items-center justify-center w-[110px] h-[110px] rounded-full  m-[30px] '>
            <Link to="/register" component={Link}>
              <img src={donation} className='w-[60px]' alt="Donation" />
            </Link>
          </div>
          <p className='font-bold'>Volunteer</p>
        </div>

        <div className='flex flex-col items-center justify-center m-4'>
          <div className='bg-pink-700 flex flex-col items-center justify-center w-[110px] h-[110px] rounded-full m-[30px] text-[40px]'>
            <Link to="/requestblood" component={Link}>
              <p className='font-bold'>{totalRequestsCount}</p>
            </Link>
          </div>
          <p className='font-bold'>
            Requests
          </p>
        </div>

      </div>







      <div className='mt-10'>
        <Footer navLinks1={socialLinks} navLinks2={contactData} />
      </div>



    </div>
  )
}

export default Home
