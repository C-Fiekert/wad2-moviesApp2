import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import "./credits.css";
import { getCredits } from "../../api/tmdb-api";
import { Card } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

export default ({ movie }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getCredits(movie.id).then(credits => {
      setCredits(credits);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
      <div className="row movies" style={{backgroundColor:"#d20000"}}>
        {credits.map(c => {
  return (
    <div className="col-sm-3" style={{backgroundColor:"#d20000"}}>
    
    <Card>
    <center>
      <Image
        className="card-img-tag center "
        //alt={"Photo Unavailable"}
        onerror="this.onerror=null; this.src='/moviesApp/film-poster-placeholder.png';"
        src={
          c.profile_path
            ? `https://image.tmdb.org/t/p/w500/${c.profile_path}`
            : "./film-poster-placeholder.png"
        }
        rounded
      />
      <Card.Content>
        <Card.Header>{c.name}</Card.Header>
        <Card.Description>
          played
        </Card.Description>
        <Card.Description>
          <Icon name='user' />
          {c.character}
        </Card.Description>
        <Card.Content extra>
          <Link to={`/actors/${c.id}`}>
          <Button class="ui button" animated='vertical' color="red" fluid>
            <Button.Content hidden><Icon name='angle double right' /></Button.Content>
            <Button.Content visible>
              View Actor
            </Button.Content>
          </Button>
          <br></br>
          </Link>
        </Card.Content>
      </Card.Content>
      </center>
    </Card>
    </div>
  );})}
  </div>
  )
  }