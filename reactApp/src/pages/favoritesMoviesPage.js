import React, {useContext, useState} from "react";
import {AuthContext} from '../contexts/authContext';
import FavoriteWatchListPageTemplate from "../components/templateFavoriteWatchListPage";
import AddReviewButton from '../components/buttons/addReview';
import RemoveFavoriteMovieButton from '../components/buttons/removeFavoriteMovie';

const FavoriteMoviesPage = () => {
  const context = useContext( AuthContext );
  const [ favorites, setFavorites ] = useState([]);

  if ( context.isAuthenticated ) {
    var userFav = async() => {
      let favouriteMovies = await context.getUserFavourites( context.userName );
      return favouriteMovies;
    }
  userFav().then( userFavourites => setFavorites( userFavourites ) )

  return (
    <FavoriteWatchListPageTemplate
      movies={favorites}
      title={"Favorite Movies"}
      review={movie => <AddReviewButton movie={movie} />}
      remove={movie => <RemoveFavoriteMovieButton movie={movie} />}
    />
  );
};
}

export default FavoriteMoviesPage;