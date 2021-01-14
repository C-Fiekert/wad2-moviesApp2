import React, { useContext } from "react";
import { Button, Icon } from 'semantic-ui-react';
import { AuthContext } from "../../contexts/authContext";
import { addFavourite } from '../../api/movie-api'

const AddToFavoritesButton = ({ movie }) => {
  const context = useContext( AuthContext );

  const handleAddToFavorite = e => {
    e.preventDefault();
    addFavourite( context.userName, movie.id );
  };
  return (
    <Button className="ui button" animated='vertical' color="red" fluid onClick={ handleAddToFavorite }>
      <Button.Content hidden><Icon name='angle double right' /></Button.Content>
      <Button.Content visible>
        Add to Favorites
      </Button.Content>
    </Button>
  );
};

export default AddToFavoritesButton;