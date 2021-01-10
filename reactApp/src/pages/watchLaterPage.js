import React, {useContext} from "react";
import FavoriteWatchListPageTemplate from "../components/templateFavoriteWatchListPage";
import {MoviesContext} from '../contexts/moviesContext'
import AddReviewButton from '../components/buttons/addReview'
import RemoveWatchListButton from '../components/buttons/removeWatchLater'

const WatchLaterPage = props => {
  const context = useContext(MoviesContext);
  const watchLater = context.upcoming.filter( u => u.watchL )
  return (
    <FavoriteWatchListPageTemplate
      movies={watchLater}
      title={"Watch Later"}
      review={movie => <AddReviewButton movie={movie} />}
      remove={movie => <RemoveWatchListButton movie={movie} />}
    />
  );
};

export default WatchLaterPage;