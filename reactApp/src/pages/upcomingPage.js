import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import WatchListButton from '../components/buttons/addToWatchList'

const UpcomingPage = () => {
  const context = useContext(MoviesContext)
  const movies = context.upcoming.filter((u) => {
    return u.watchL === false || !("watchL" in u);
  });

  return (
    <PageTemplate 
      title='No. Movies'
      movies={movies}
      action={(movie) => {
        return <WatchListButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingPage;