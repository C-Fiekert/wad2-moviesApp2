import React, { useContext } from "react";
import {AuthContext} from "../../contexts/authContext";
import { Button, Icon } from 'semantic-ui-react';
import { removeFavourite } from '../../api/movie-api'

const RemoveFavoriteMovieButton = ({ movie }) => {
  const context = useContext(AuthContext);

  const handleRemoveFavoriteMovie = e => {
    e.preventDefault();
    removeFavourite( context.userName, movie.id );
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