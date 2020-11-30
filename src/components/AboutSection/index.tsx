import { motion } from 'framer-motion';
import React from 'react';
import { fade, photoAnimation, titleAnimation } from '../../animation';
import home1 from '../../img/home1.png';
import Wave from '../Wave';
import { Container, Description, Hide, Image, Title } from './styles';

const AboutSection: React.FC = () => {
  return (
    <Container>
      <Description>
        <Title>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true</motion.h2>
          </Hide>
        </Title>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="guy with a camera"
        />
      </Image>
      <Wave />
    </Container>
  );
};

export default AboutSection;
