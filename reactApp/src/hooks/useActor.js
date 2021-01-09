import { useEffect, useState } from "react";
import {getActor} from '../api/tmdb-api'

const useActor = id => {
  const [person, setActor] = useState(null);
  useEffect(() => {
    getActor(id).then(person => {
      setActor(person);
    });
  }, [id]);
  return [person, setActor];
};

export default useActor