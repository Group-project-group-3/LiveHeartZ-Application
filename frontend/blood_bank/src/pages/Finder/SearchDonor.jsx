import React from 'react'
import { useLocation } from "react-router-dom";
import { axiosGet, axiosPost } from '../../AxiosOperations';
import { useState,useEffect } from 'react';
import Spinner1 from '../../pages/spinners/Spinner1';
import testImg from '/user.png';
