import React, { useContext, useState, useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getTopRated, getFavourites, getWatchLater } from "../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
      toprated: [...state.toprated],
      upcoming: [...state.upcoming],
      favoriteMovies:[...state.favoriteMovies],
      watchLMovies:[...state.watchLMovies],
      };
    case "remove-favorite":
    return {
      movies: state.movies.map((m) =>
        m.id === action.payload.movie.id ? { ...m, favorite: false } : m
      ),
      toprated: [...state.toprated],
      upcoming: [...state.upcoming],
      favoriteMovies:[...state.favoriteMovies],
      watchLMovies:[...state.watchLMovies],
    };
    case "watch-list":
      return {
        upcoming: state.upcoming.map((u) =>
          u.id === action.payload.movie.id ? { ...u, watchL: true } : u
        ),
        movies: [...state.movies],
        toprated: [...state.toprated],
        favoriteMovies:[...state.favoriteMovies],
        watchLMovies:[...state.watchLMovies],
      };
    case "remove-watch":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchL: false } : m
        ),
        movies: [...state.movies],
        toprated: [...state.toprated],
        favoriteMovies:[...state.favoriteMovies],
        watchLMovies:[...state.watchLMovies],
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], toprated: [...state.toprated], favoriteMovies:[...state.favoriteMovies], watchLMovies:[...state.watchLMovies] };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], toprated: [...state.toprated], favoriteMovies:[...state.favoriteMovies], watchLMovies:[...state.watchLMovies] };
    case "load-toprated":
      return { toprated: action.payload.toprated, movies: [...state.movies], upcoming: [...state.upcoming], favoriteMovies:[...state.favoriteMovies], watchLMovies:[...state.watchLMovies] };
    case "load-favoriteMovies":
      console.log(action.payload.favoriteMovies)
      return { favoriteMovies: action.payload.favoriteMovies, movies: [...state.movies], toprated:[...state.toprated], upcoming:[...state.upcoming], watchLMovies:[...state.watchLMovies] };
    case "load-watchLMovies":
      console.log(action.payload.watchLMovies)
      return { watchLMovies: action.payload.watchLMovies, movies: [...state.movies], toprated:[...state.toprated], upcoming:[...state.upcoming], favoriteMovies:[...state.favoriteMovies] };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        toprated: [...state.toprated],
        favoriteMovies:[...state.favoriteMovies],
        watchLMovies:[...state.watchLMovies],
      };
    default:
      return state;
      }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], toprated: [], favoriteMovies:[], watchLMovies:[]});
  const [authenticated, setAuthenticated] = useState(false);

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index]} });
  };

  const removeFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "remove-favorite", payload: { movie: state.movies[index]} });
  };

  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((u) => u.id).indexOf(movieId);
    dispatch({ type: "watch-list", payload: { movie: state.upcoming[index] } });
  };

  const removeWatch = (movieId) => {
    const index = state.upcoming.map((u) => u.id).indexOf(movieId);
    dispatch({ type: "remove-watch", payload: { movie: state.upcoming[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  }; 

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTopRated().then((toprated) => {
      dispatch({ type: "load-toprated", payload: { toprated } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const getFavouriteMovies = async (username) => {
    getFavourites(username).then((favoriteMovies) => {
    dispatch({ type: "load-favoriteMovies", payload: { favoriteMovies } });
    console.log(favoriteMovies);
    });
  }

  const getWatchLaterMovies = async (username) => {
    getWatchLater(username).then((watchLMovies) => {
    dispatch({ type: "load-watchLMovies", payload: { watchLMovies } });
    console.log(watchLMovies);
    });
  }

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        toprated: state.toprated,
        favoriteMovies:state.favoriteMovies,
        watchLMovies:state.watchLMovies,
        addToWatchList: addToWatchList,
        removeWatch: removeWatch,
        addToFavorites: addToFavorites,
        removeFavorites: removeFavorites,
        addReview: addReview,
        setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};
export default MoviesContextProvider;