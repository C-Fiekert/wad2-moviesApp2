import React, { useContext } from "react";
import {AuthContext} from "../../contexts/authContext";
import { Button, Icon } from 'semantic-ui-react';
import { removeWatchLater} from '../../api/movie-api';

const RemoveWatchListButton = ({ movie }) => {
  const context = useContext(AuthContext);

  const handleRemoveWatchList = e => {
    e.preventDefault();
    removeWatchLater( context.userName, movie.id );
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