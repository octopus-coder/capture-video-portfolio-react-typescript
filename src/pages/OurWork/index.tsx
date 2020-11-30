import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  fade,
  lineAnimation,
  pageAnimation,
  photoAnimation,
  slider,
  sliderContainer,
} from '../../animation';
import { useScrollTop } from '../../components/useScrollTop';
import { useScroll } from '../../hooks/useScroll';
import { IMovie, MoviesData } from '../../MoviesData';
import {
  Container,
  Frame1,
  Frame2,
  Frame3,
  Frame4,
  Hide,
  Line,
  Movie,
} from './styles';

const OurWork: React.FC = () => {
  useScrollTop();
  const [movies] = useState<IMovie[]>(MoviesData());
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  const selectElemenControls = (index: number) => {
    switch (index) {
      case 1:
        return [element, controls];
      case 2:
        return [element2, controls2];
      default:
        return [null, ''];
    }
  };

  return (
    <Container
      style={{ background: '#fff' }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      {movies &&
        movies.map((movie, index) => (
          <Movie
            key={movie.url}
            ref={selectElemenControls(index)[0]}
            variants={fade}
            animate={selectElemenControls(index)[1]}
            initial={'show'}
          >
            <motion.h2 variants={fade}>{movie.title}</motion.h2>
            <Line variants={lineAnimation} />
            <Link to={movie.url}>
              <Hide>
                <motion.img
                  variants={photoAnimation}
                  src={movie.mainImg}
                  alt={movie.title}
                />
              </Hide>
            </Link>
          </Movie>
        ))}
    </Container>
  );
};

export default OurWork;
