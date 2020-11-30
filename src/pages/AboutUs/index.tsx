import { motion } from 'framer-motion';
import React from 'react';
import { pageAnimation } from '../../animation';
import AboutSection from '../../components/AboutSection';
import FaqSection from '../../components/FaqSection';
import ServicesSection from '../../components/ServicesSection';
import { useScrollTop } from '../../components/useScrollTop';

const AboutUs: React.FC = () => {
  useScrollTop();
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
