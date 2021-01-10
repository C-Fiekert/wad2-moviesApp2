import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import { Button } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

const RemoveFavoriteMovieButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFavoriteMovie = e => {
    e.preventDefault();
    context.removeFavorites(movie.id);
  };
  return (
    <Button class="ui button" animated='vertical' color="red" fluid onClick={handleRemoveFavoriteMovie}>
      <Button.Content hidden><Icon name='angle double right' /></Button.Content>
      <Button.Content visible>
        Remove from Favorites
      </Button.Content>
    </Button>
  );
};

export default RemoveFavoriteMovieButton;