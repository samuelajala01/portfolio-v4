'use client';

import React, { useState, useEffect } from 'react';
import Contactbox from "@/components/Contactbox";
import Loader from "@/components/Loader";
import HeroSection from '@/components/HeroSection';


export default function Home() {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setLoading(false);
  //   };

  //   if (document.readyState === 'complete') {
  //     handleLoad();
  //   } else {
  //     window.addEventListener('load', handleLoad);
  //   }

  //   return () => window.removeEventListener('load', handleLoad);
  // }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <>
      <HeroSection/>
        <Contactbox />
    </>
  );
}


