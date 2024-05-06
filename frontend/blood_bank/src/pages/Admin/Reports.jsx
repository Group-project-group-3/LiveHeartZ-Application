import { Button, Table } from 'antd'
import React from 'react'
import { useState, useEffect } from 'react';
import { axiosGet } from '../../AxiosOperations';
import Spinner1 from '../../pages/spinners/Spinner1';
import { WarningOutlined } from '@ant-design/icons';

const Report = () => {
const [reports, setReports] = useState([]);
const [loading, setLoading] = useState(true);

const deleteDonor = async (email) => {
    
    try {
        await axiosGet(`donor/delete/${email}`);
        alert("Succsessfully Delete Donor");
      } catch (error) {
  
      }
    }

    useEffect(() => {
        axiosGet('report/getreport')

        
      .then(data => {

        setReports(data.data);

      }).then(setInterval(() => {
        setLoading(false);
      }, 350))
      .catch(error => {

        console.error('Error fetching data:', error);
      });

      return () => {
        // Cleanup code goes here
      };
    }, [deleteDonor]);

    const columns = [
        {
            title: 'Donor Email',
            dataIndex: '_id',
            key: 'email',
        },
        {
            title: 'Report Count',
            dataIndex: 'count',
            key: 'count',
        },
        {
            key: 'Action',
            title: 'Actions', 
            render: (recode) => {
                const tempData = JSON.stringify(recode);
                const row = JSON.parse(tempData);
        
                return <>
                <div key={recode.key} className='flex gap-7 '></div>
                <Button  className='text-white' style={{ backgroundColor: '#BC005A', border: '2px solid white' }} onClick={() => deleteDonor(row._id)} >DELETE</Button>
                </>
            }
        }
    ];

    return (
        <div className='grid grid-cols-1 p-[30px] '></div>
    )
}

export default Report