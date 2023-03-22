import React from 'react';
import HeaderElement from '../components/HeaderElement';
import HeroSection from '../components/HeroSection';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials'
import Founders from '../components/Founders';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <HeaderElement />
      <HeroSection />
      <Specials />
      <Testimonials />
      <Founders />
      <Footer />
    </>
  )
}

export default Home
