import React from "react";
import PageTemplate from '../components/templateMoviePage'
import MovieReview from "../components/movieReview";
import 'semantic-ui-css/semantic.min.css'

const MovieReviewPage = (props) => {
  return (
      <PageTemplate movie={props.location.state.movie}>
        <MovieReview review={props.location.state.review} /> 
      </PageTemplate>
  );
};

export default MovieReviewPage;