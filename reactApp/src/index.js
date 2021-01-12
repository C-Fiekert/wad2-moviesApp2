import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'semantic-ui-css/semantic.min.css';
import SiteHeader from './components/siteHeader';
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import ActorListPage from './pages/actorPage';
import ActorPage from './pages/actorDetailsPage';
import FavoriteMoviesPage from './pages/favoritesMoviesPage';
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingPage from './pages/upcomingPage';
import AddMovieReviewPage from './pages/addMovieReviewPage';
import WatchLaterPage from './pages/watchLaterPage';
import TopRatedPage from './pages/topRatedPage';
import LoginSignUpPage from "./pages/loginSignUp";
import PrivateRoute from './contexts/privateRoute.js'
import MoviesContextProvider from "./contexts/moviesContext";
import ActorsContextProvider from "./contexts/actorsContext";
import GenresContextProvider from "./contexts/genresContext";
import AuthContextProvider from "./contexts/authContext";



const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron" style={{backgroundColor:"#d20000"}}>
        <AuthContextProvider>
        <SiteHeader /> 
        <div className="container-fluid" >
          <MoviesContextProvider>
            <ActorsContextProvider>
              <GenresContextProvider>    {/* NEW */}
              <Switch>
                <Route path="/loginSignUp" component={LoginSignUpPage} />
                <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
                <Route exact path="/reviews/:id" component={MovieReviewPage} />
                <Route exact path="/movies/top-rated" component={TopRatedPage} />
                <Route exact path="/movies/upcoming" component={UpcomingPage} />
                <PrivateRoute exact path="/movies/watchLater" component={WatchLaterPage} />
                <Route exact path="/actors" component={ActorListPage} />
                <Route exact path="/actors/:id" component={ActorPage} />
                <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                <Route path="/movies/:id" component={MoviePage} />
                <Route exact path="/" component={HomePage} />
                <Redirect from="*" to="/" />
              </Switch>
              </GenresContextProvider>
            </ActorsContextProvider>
          </MoviesContextProvider>
        </div>
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));