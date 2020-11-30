import { AnimateSharedLayout } from 'framer-motion';
import React from 'react';
import { scrollReveal } from '../../animation';
import { useScroll } from '../../hooks/useScroll';
import Toggle from '../Toggle';
import { Answer, Container } from './styles';

const FaqSection: React.FC = () => {
  const [element, controls] = useScroll();
  return (
    <Container
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <Answer>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, qui.
            </p>
          </Answer>
        </Toggle>
        <Toggle title="Daily Schedule">
          <Answer>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, qui.
            </p>
          </Answer>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <Answer>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, qui.
            </p>
          </Answer>
        </Toggle>
        <Toggle title="What Products do you offer?">
          <Answer>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, qui.
            </p>
          </Answer>
        </Toggle>
      </AnimateSharedLayout>
    </Container>
  );
};

export default FaqSection;
