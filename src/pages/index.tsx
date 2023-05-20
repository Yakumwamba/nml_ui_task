import React from 'react';

import AboutDesignSection from '@/components/AboutDesignSection';
import FooterSection from '@/components/FooterSection';
import HeroSection from '@/components/HeroSection';
import ImageGalleryGrid from '@/components/ImageGallerySection';
import Navbar from '@/components/Navbar';

export default function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ImageGalleryGrid />
      <AboutDesignSection />
      <FooterSection />
    </>
  );
}
