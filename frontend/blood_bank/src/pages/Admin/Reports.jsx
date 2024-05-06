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
    }, [deleteDonor]);
}

export default Report