import React,{useState} from 'react';
import { Link, json } from "react-router-dom"; // Assuming you're using React Router for navigation
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { navLinks } from '../assets/data/HeaderData';
import { socialLinks, contactData } from '../assets/data/FooterData';
import { axiosGet, axiosPost } from "../AxiosOperations";
import Profile from "../pages/Donar/Profile";
import { useNavigate } from "react-router-dom";
