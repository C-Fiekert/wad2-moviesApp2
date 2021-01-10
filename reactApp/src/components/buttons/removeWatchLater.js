import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import { Button } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

const RemoveWatchListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveWatchList = e => {
    e.preventDefault();
    context.removeWatch(movie.id);
  };
  return (
    <Button class="ui button" animated='vertical' color="red" fluid onClick={handleRemoveWatchList}>
      <Button.Content hidden><Icon name='angle double right' /></Button.Content>
      <Button.Content visible>
        Remove from Watch List
      </Button.Content>
    </Button>
  );
};

export default RemoveWatchListButton;