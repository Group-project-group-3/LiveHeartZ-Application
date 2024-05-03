import { Table } from 'antd'
import React from 'react'
import { useState, useEffect } from 'react';

import { axiosGet } from '../../AxiosOperations';
import Spinner1 from '../../pages/spinners/Spinner1';

const Donor = () => {
    const [donordata, setDonorData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        axiosGet('donor/alldonors')
        .then(data=>{
            setDonorData(data.data);
        }).then(setInterval(() => {
            
        },350))

    }, []);
}

export default Donor