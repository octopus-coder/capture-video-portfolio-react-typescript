import React from 'react';
import { scrollReveal } from '../../animation';
import { useScroll } from '../../hooks/useScroll';
import clock from '../../img/clock.svg';
import diaphragm from '../../img/diaphragm.svg';
import home2 from '../../img/home2.png';
import money from '../../img/money.svg';
import teamwork from '../../img/teamwork.svg';
import { Card, Cards, Container, Description, Icon, Image } from './styles';

const ServicesSection: React.FC = () => {
  const [element, controls] = useScroll();
  return (
    <Container
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <Icon>
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icon>
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icon>
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <Icon>
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </Icon>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="home 2" />
      </Image>
    </Container>
  );
};

export default ServicesSection;
