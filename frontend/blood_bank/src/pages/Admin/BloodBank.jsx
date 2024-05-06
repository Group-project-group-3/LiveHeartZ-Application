import { Table } from 'antd'
import React from 'react'
import { useState, useEffect } from 'react';
import { axiosGet } from '../../AxiosOperations';
const BloodBank = () => {

  const [blooddata, setBloodData] = useState([]);
  const [loading, setLoading] = useState(true);


  const addCount = async (id, count) => {

    try {

      await axiosGet(`home/bloodbank/updatecount/${id}/${count}/add`).then(alert("Succesfully Added Blood Unit"))

    } catch (error) {
      alert(error.message);
    }
  }

  const subCount = async (id, count) => {


    try {

      await axiosGet(`home/bloodbank/updatecount/${id}/${count}/sub`).then(alert("Succesfully Delete Blood Unit"));

    } catch (error) {
      alert(error.message);
    }
  }


}
