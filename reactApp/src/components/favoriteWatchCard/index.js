import React from "react";
import { Link } from "react-router-dom";
import "./favoriteWatchCard.css";
import "../../globals/fontawesome";
import { Card, Icon, Image } from 'semantic-ui-react';

const FavoriteWatchCard = ({movie, review, remove}) => {
  console.log("5");
  return (
    <div className="col-sm-3" style={{backgroundColor:"#d20000"}}>
      <Link to={`/movies/${movie.id}`}>
      <Card>
        <Image
          className="card-img-tag center "
          //alt={movie.title}
          onerror="this.onerror=null; this.src='/moviesApp/film-poster-placeholder.png';"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
          rounded
        />
        <Card.Content>
          <Card.Header>{movie.title}</Card.Header>
          <Card.Description>
            <Icon name='calendar alternate' />
            {movie.release_date}
          </Card.Description>
          <Card.Description>
            <Icon name='star outline' />
            {movie.vote_average}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {review(movie)}
          {remove(movie)}
        </Card.Content>
      </Card>
      </Link>
    </div>
  );
};

export default FavoriteWatchCard;