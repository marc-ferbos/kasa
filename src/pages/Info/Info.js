import React from 'react';
import './Info.scss';

import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Banner from '../../Components/Banner';
import Aproposinfo from '../../Components/Aproposinfo';

function Info() {
    return (
      <>
      <Navbar></Navbar>
      <Banner
      title=""
      classBanner="Info"></Banner>
      <Aproposinfo></Aproposinfo>
      <Footer></Footer>
      </>
    );
  }
  
  export default Info;