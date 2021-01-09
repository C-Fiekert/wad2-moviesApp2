import React from "react";
import { Table, Flag } from "semantic-ui-react";
import "./movieDetails.css";

export default ({ movie }) => {
  return (
    <>
      <h4 style={{color:"white"}}>Overview</h4>
      <p  style={{color:"white"}}>{movie.overview}</p>
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell active>Runtime (min).</Table.Cell>
            <Table.Cell>{movie.runtime}</Table.Cell>
            <Table.Cell active>Release Date</Table.Cell>
            <Table.Cell>{movie.release_date}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell active>Genres</Table.Cell>
            {movie.genres.map(g => (
              <Table.Cell key={g.name}>{g.name}</Table.Cell>
            ))}
          </Table.Row>
          <Table.Row>
            <Table.Cell active>Spoken Languages</Table.Cell>
            {movie.spoken_languages.map(lang => (
                <Table.Cell key={lang.name}>
                  {lang.name}
                </Table.Cell>
              ))}
          </Table.Row>
          <Table.Row>
            <Table.Cell active>Production Companies</Table.Cell>
            {movie.production_companies.map(pcm => (
                <Table.Cell key={pcm.name}>{pcm.name}</Table.Cell>
              ))}
          </Table.Row>
          <Table.Row>
            <Table.Cell active>Production Countries</Table.Cell>
            {movie.production_countries.map(pc => (
                <Table.Cell key={pc.name}>
                  <Flag name={pc.iso_3166_1.toLowerCase()} />{pc.name}
                </Table.Cell>
              ))}
          </Table.Row>
          <Table.Row>
            <Table.Cell active>Budget</Table.Cell>
            <Table.Cell>${movie.budget}</Table.Cell>
            <Table.Cell active>Revenue</Table.Cell>
            <Table.Cell>${movie.revenue}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell active>Movie Status</Table.Cell>
            <Table.Cell>{movie.status}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell active>Movie Rating</Table.Cell>
            <Table.Cell>{movie.vote_average}</Table.Cell>
            <Table.Cell active>Vote Count</Table.Cell>
            <Table.Cell>{movie.vote_count}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};