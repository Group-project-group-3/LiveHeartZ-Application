import React from 'react'
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

import { navLinks } from '../../assets/data/HeaderData';
import { socialLinks, contactData } from '../../assets/data/FooterData';
const RequestBlood = () => {

  return (
    <div>
      <div>
        <Header navLinks={navLinks} />
      </div>

      <div>
        <Footer navLinks1={socialLinks} navLinks2={contactData} />
      </div>
    </div>
    
  )
}

export default RequestBlood