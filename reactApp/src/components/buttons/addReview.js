import React from "react";
import { Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

const ReviewButton = ({ movie }) => {
  return (
    <Link
      to={{
        pathname: `/reviews/form`,
        state: {
          movie: movie
        }
      }}
    >
      <Button class="ui button" animated='vertical' color="red" fluid>
      <Button.Content hidden><Icon name='angle double right' /></Button.Content>
      <Button.Content visible>
        Add a Review
      </Button.Content>
    </Button>
    <br></br>
    </Link>
  );
};

export default ReviewButton;