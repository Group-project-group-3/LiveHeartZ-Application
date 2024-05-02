import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";

import { axiosGet } from '../../AxiosOperations';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { donorNavLinks } from '../../assets/data/HeaderData';
import { socialLinks, contactData } from '../../assets/data/FooterData';

import { Table } from 'antd';
import Report from '../Donar/popup/Report.jsx';

const Requests = () => {

  const [data, setData] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const blood = searchParams.get("blood");

   useEffect(() => {

    axiosGet(`finder/requests/${blood}`)

      .then(data => {

        setData(data.data);

      })
      .catch(error => {

        console.error('Error fetching data:', error);
      });


    return () => {
      // Cleanup code goes here
    };
  }, []);


  const addReport = (id) => {
    setReport(true);
  }

  
  return (
    <div >
      <div>
        <Header navLinks={donorNavLinks} donorloged={true} />
      </div>

      <div className="responsive-table flex justify-center pt-[40px] pb-[40px] bg-slate-100 h-[70vh]">
        <Table className='border-2 p-[30px]' dataSource={[data][0]} columns={columns} />
      </div>

      <div>
        <Footer navLinks1={socialLinks} navLinks2={contactData} />
      </div>
    </div>
  )
}

export default Requests
