import React from "react";
import PageTemplate from "../components/templateMoviePage";
import ReviewForm from '../components/reviewForm'
import 'semantic-ui-css/semantic.min.css'

const ReviewFormPage = props => {

  return (
      <PageTemplate movie={props.location.state.movie}>
        <ReviewForm movie={props.location.state.movie} />
      </PageTemplate>
  );
};
export default ReviewFormPage;