import React, { useContext } from "react";
import { Button, Icon } from 'semantic-ui-react';
import { AuthContext } from "../../contexts/authContext";
import { addWatchLater } from "../../api/movie-api";

const WatchListButton = ({ movie }) => {
  const context = useContext(AuthContext);

  const handleWatchList = e => {
    e.preventDefault();
    addWatchLater( context.userName, movie.id );
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