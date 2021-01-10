import React from "react";
import { Link } from "react-router-dom";
import "./actorCard.css";
import "../../globals/fontawesome";
import { Card } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

const ActorCard = ({person}) => {
  return (
    <div className="col-sm-3" style={{backgroundColor:"#d20000"}}>
      <Link to={`/actors/${person.id}`}>
      <Card>
        <Image
          className="card-img-tag center "
          alt={person.name}
          onerror="this.onerror=null; this.src='/moviesApp/film-poster-placeholder.png';"
          src={
            person.profile_path
              ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
              : "./film-poster-placeholder.png"
          }
          rounded
        />
        <Card.Content>
          <Card.Header>{person.name}</Card.Header>
          <Card.Description>
            <Icon name='like'/>
            Rating: {person.popularity}
          </Card.Description>
          <Card.Description>
            <b>Featured in:</b>
            {person.known_for.map(kf => (
                <p key={kf.title}>{kf.title}</p>
            ))}
            {person.known_for.map(kf => (
                <p key={kf.name}>{kf.name}</p>
            ))}
          </Card.Description>
        </Card.Content>
      </Card>
      </Link>
    </div>
  );
};

export default ActorCard;