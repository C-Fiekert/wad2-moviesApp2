import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import Credits from "../components/credits"
import useMovie from "../hooks/useMovie";
import { Button } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'

const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id)  // NEW
  console.log("1")
  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>
        <br></br><br></br>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link to={`/movies/${id}/reviews`}>
                <Button class="ui button" animated='vertical' color="yellow" fluid>
                <Button.Content hidden><Icon name='angle double right' /></Button.Content>
                <Button.Content visible>
                Show Reviews (Extracts)
                </Button.Content>
                </Button>
                <br></br>
              </Link>
            ) : (
              <Link to={`/movies/${id}`}>
                <Button class="ui button" animated='vertical' color="yellow" fluid>
                <Button.Content hidden><Icon name='angle double right' /></Button.Content>
                <Button.Content visible>
                  Hide Reviews
                </Button.Content>
                </Button>
                <br></br>
              </Link>
              )
            }
          </div>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />
        <br></br><br></br>
        <center><h1 style={{color:"white"}}>Meet the Cast</h1></center>
        <Credits movie={movie} />
      </>
    ) : (
      <center><p style={{color:"white"}}>Waiting for movie details</p></center>
    )}
  </>
  );
};
console.log("2")
export default withRouter(MoviePage);