import { motion } from 'framer-motion';
import styled from 'styled-components/macro';

export const Container = styled(motion.div)<any>`
  min-height: 90vh;
  display: block;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 10rem;
  color: white;
  span {
    display: block;
  }
  h2 {
    padding: 2rem 0rem;
    font-weight: lighter;
  }
`;

export const FAQLine = styled.div`
  background: #cccccc;
  height: 0.2rem;
  margin: 1rem 0rem;
  width: 100%;
`;

export const Question = styled(motion.div)`
  padding: 1rem 0rem;
  cursor: pointer;
`;

export const Answer = styled.div`
  padding: 1rem 0rem;
  p {
    padding: 0.3rem 0rem;
  }
`;
