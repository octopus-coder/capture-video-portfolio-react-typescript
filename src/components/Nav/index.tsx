import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Line, Logo } from './styles';

const Nav: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      <Logo>
        <Link id="logo" to="/">
          Capture
        </Link>
      </Logo>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname.startsWith('/work') ? '50%' : '0%' }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
          />
        </li>
      </ul>
    </Container>
  );
};

export default Nav;
