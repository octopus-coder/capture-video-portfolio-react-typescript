import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  /* background: white; */
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;

export const Movie = styled(motion.div)<any>`
  padding-bottom: 10rem;
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export const Line = styled(motion.div)`
  height: 0.5rem;
  background: #23d997;
  margin-bottom: 3rem;
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

export const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

export const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

export const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
