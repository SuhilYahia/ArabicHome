import React from 'react';
import { Hero } from '../components/sections/Hero';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { GallerySection } from '../components/sections/GallerySection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { CallToAction } from '../components/sections/CallToAction';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesGrid />
      <WhyChooseUs />
      <GallerySection />
      <ProcessSection />
      <CallToAction />
      <ContactSection />
    </main>
  );
};
