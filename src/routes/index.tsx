import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import MovieDetail from '../pages/MovieDetail';
import OurWork from '../pages/OurWork';

const Routes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={AboutUs} />
        <Route path="/work" exact component={OurWork} />
        <Route path="/work/:id" component={MovieDetail} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
