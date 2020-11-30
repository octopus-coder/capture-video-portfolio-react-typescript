import { motion } from 'framer-motion';
import React from 'react';
import { pageAnimation, titleAnimation } from '../../animation';
import { Circle, Container, Hide, Social, Title } from './styles';

const ContactUs: React.FC = () => {
  return (
    <Container
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: '#fff' }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send us a message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Send an email.</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>Social media</h2>
          </Social>
        </Hide>
      </div>
    </Container>
  );
};

export default ContactUs;
