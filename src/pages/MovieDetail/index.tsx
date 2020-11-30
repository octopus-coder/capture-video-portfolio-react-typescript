import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { pageAnimation } from '../../animation';
import { useScrollTop } from '../../components/useScrollTop';
import { IMovie, MoviesData } from '../../MoviesData';
import {
  Award,
  Awards,
  Container,
  HeadLine,
  ImageDisplay,
  Line,
} from './styles';

const MovieDetail: React.FC = () => {
  useScrollTop();
  const [movie, setMovie] = useState<IMovie>({} as IMovie);
  const { pathname } = useLocation();
  // const [movie, setMovie] = useState<IMovie>(() => {
  //   return MoviesData().filter((movieData) => movieData.url === pathname)[0];
  // });

  useEffect(() => {
    const loadedMovie = MoviesData().filter(
      (movieData) => movieData.url === pathname
    )[0];
    setMovie(loadedMovie);
  }, [pathname]);

  return (
    <>
      {movie && (
        <Container
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </HeadLine>
          <Awards>
            {movie.awards &&
              movie.awards.map((award) => (
                <Award key={award.title}>
                  <h3>{award.title}</h3>
                  <Line />
                  <p>{award.description}</p>
                </Award>
              ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt={movie.title} />
          </ImageDisplay>
        </Container>
      )}
    </>
  );
};

export default MovieDetail;
