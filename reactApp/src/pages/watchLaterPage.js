import React, {useContext, useState} from "react";
import FavoriteWatchListPageTemplate from "../components/templateFavoriteWatchListPage";
import {AuthContext} from '../contexts/authContext'
import AddReviewButton from '../components/buttons/addReview'
import RemoveWatchListButton from '../components/buttons/removeWatchLater'

const WatchLaterPage = props => {
  const context = useContext( AuthContext );
  const [ watchLater, setWatchLater ] = useState([]);

  if ( context.isAuthenticated ) {
    var userWatch = async() => {
      let watchLMovies = await context.getUserWatchLater( context.userName );
      return watchLMovies;
    }
  userWatch().then( userWatchLater => setWatchLater( userWatchLater ) )

  return (
    <FavoriteWatchListPageTemplate
      movies={watchLater}
      title={"Watch Later"}
      review={movie => <AddReviewButton movie={movie} />}
      remove={movie => <RemoveWatchListButton movie={movie} />}
    />
  );
  };
};

export default WatchLaterPage;