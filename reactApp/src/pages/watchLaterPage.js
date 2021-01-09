import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext'
import AddReviewButton from '../components/buttons/addReview'

const WatchLaterPage = props => {
  const context = useContext(MoviesContext);
  const watchLater = context.upcoming.filter( u => u.watchL )
  return (
    <MovieListPageTemplate
      movies={watchLater}
      title={"Watch Later"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default WatchLaterPage;