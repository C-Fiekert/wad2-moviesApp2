import React, { useContext } from "react";
import PageTemplate from '../components/templateTopRatedPage'
import {MoviesContext} from '../contexts/moviesContext'

const TopRatedPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.toprated.filter((m) => { return !("favorite" in m); });

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
    />
  );
};

export default TopRatedPage;