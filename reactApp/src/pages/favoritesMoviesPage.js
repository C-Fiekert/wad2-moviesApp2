import React, {useContext} from "react";
import FavoriteWatchListPageTemplate from "../components/templateFavoriteWatchListPage";
import AddReviewButton from '../components/buttons/addReview'
import RemoveFavoriteMovieButton from '../components/buttons/removeFavoriteMovie'
import {MoviesContext} from '../contexts/moviesContext'

const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContext);
  const favorites = context.movies.filter( m => m.favorite )
  return (
    <FavoriteWatchListPageTemplate
      movies={favorites}
      title={"Favorite Movies"}
      review={movie => <AddReviewButton movie={movie} />}
      remove={movie => <RemoveFavoriteMovieButton movie={movie} />}
    />
  );
};

export default FavoriteMoviesPage;