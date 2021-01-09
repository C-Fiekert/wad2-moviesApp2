import React, { useEffect, createContext, useReducer } from "react";
import { getActors } from "../api/tmdb-api";

export const ActorsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { persons: action.payload.persons };
      break;
    default:
      return state;
  }
};

const ActorsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { persons: [] });

  useEffect(() => {
    getActors().then((persons) => {
      dispatch({ type: "load", payload: { persons } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ActorsContext.Provider
      value={{
        persons: state.persons,
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;