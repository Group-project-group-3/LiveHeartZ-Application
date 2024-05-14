import React from 'react';
import Logo from '../../assets/images/header/LiveHeartZ.png';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { navLinks } from '../../assets/data/HeaderData';
import { socialLinks, contactData } from '../../assets/data/FooterData';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header navLinks={navLinks} />
      <main className="container py-12 px-4 md:px-0 md:py-16 mx-auto">
        <div className="flex justify-center md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
          <img className="w-full md:max-w-xs lg:max-w-sm" src={Logo} alt="Logo" />
        </div>
        <div className="text-center mt-8 md:mt-12 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-800">Live Heartz</h1>
          <h3 className="text-lg md:text-xl text-gray-700">Live heartz sub</h3>
          <p className="mt-4 text-gray-800 text-sm md:text-base">
            Blood donation is an extremely noble deed, yet there is a scarcity of regular donors across India. We focus on creating & expanding a virtual army of blood donating volunteers who could be searched and contacted by family / care givers of a patient in times of need.
          </p>
          <Link
            to="/register"
            className="inline-block mt-6 text-white font-bold py-2 px-4 rounded-md bg-pink-600 hover:bg-pink-700 transition duration-300 ease-in-out"
          >
            Visit
          </Link>
        </div>
      </main>
      <Footer navLinks1={socialLinks} navLinks2={contactData} />
    </div>
  );
};

export default About;
