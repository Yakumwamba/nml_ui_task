import React from 'react';

import AboutDesignSection from '@/components/sections/AboutDesignSection';
import FooterSection from '@/components/sections/FooterSection';
import HeroSection from '@/components/sections/HeroSection';
import ImageGallerySection from '@/components/sections/ImageGallerySection';
import Navbar from '@/components/widgets/Navbar';

export default function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ImageGallerySection />
      <AboutDesignSection />
      <FooterSection />
    </>
  );
}
