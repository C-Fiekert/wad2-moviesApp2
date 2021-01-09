import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import { Button } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

const WatchListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleWatchList = e => {
    e.preventDefault();
    context.addToWatchList(movie.id);
  };
  return (
    <Button class="ui button" animated='vertical' color="red" fluid onClick={handleWatchList}>
      <Button.Content hidden><Icon name='angle double right' /></Button.Content>
      <Button.Content visible>
        Add to Watch Later
      </Button.Content>
    </Button>
  );
};

export default WatchListButton;