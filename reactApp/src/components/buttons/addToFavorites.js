import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import { Button } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

const AddToFavoritesButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(movie.id);
  };
  return (
    <Button class="ui button" animated='vertical' color="red" fluid onClick={handleAddToFavorite}>
      <Button.Content hidden><Icon name='angle double right' /></Button.Content>
      <Button.Content visible>
        Add to Favorites
      </Button.Content>
    </Button>
  );
};

export default AddToFavoritesButton;