import { Table } from 'antd'
import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { adminNavLinks } from '../../assets/data/HeaderData';
import { socialLinks, contactData } from '../../assets/data/FooterData';
import { axiosGet } from '../../AxiosOperations';
import Spinner1 from '../../pages/spinners/Spinner1';

const Donor = () => {

  const [donordata, setDonorData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axiosGet('donor/alldonors')

      .then(data => {

        setDonorData(data.data);

      }).then(setInterval(() => {
        setLoading(false);
      }, 350))
      .catch(error => {

        console.error('Error fetching data:', error);
      });


    return () => {
      // Cleanup code goes here
    };
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'fullname',
      key: 'count',
    },
    {
      title: 'District',
      dataIndex: 'district',
      key: 'district',
    },

    {
      title: 'Province',
      dataIndex: 'province',
      key: 'province',
    },
    {
      title: 'Blood Type',
      dataIndex: 'bloodgroup',
      key: 'bloodgroup',
    },
    {
      title: 'Last Donate',
      dataIndex: 'lastdonationdate',
      key: 'lastdonationdate',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text) => <a href={`mailto:${text}`} style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>{text}</a>,
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
    }



  ];
  return (
    <div >
      <div>
        <Header navLinks={adminNavLinks} donorloged={true} />
      </div>
      <div className='grid grid-cols-1 p-[30px] '>
        <center className='homepara font-bold text-[26px]'>Donars List</center>
        {
          loading ? (<Spinner1 />) : (<div className='bg-slate-400 m-[50px]'>
            <Table columns={columns} dataSource={donordata} />
          </div>)
        }

      </div>
      <div>
        <Footer navLinks1={socialLinks} navLinks2={contactData} />
      </div>
    </div>

  )
}

export default Donor