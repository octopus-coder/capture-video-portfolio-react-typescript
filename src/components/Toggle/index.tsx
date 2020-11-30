import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FAQLine, Question } from '../FaqSection/styles';

interface ToggleProps {
  title: string;
}

const Toggle: React.FC<ToggleProps> = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Question layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle && children}
      <FAQLine />
    </Question>
  );
};

export default Toggle;
