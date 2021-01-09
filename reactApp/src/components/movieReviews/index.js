import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieReviews } from "../../api/tmdb-api";
import { Table, Button, Icon } from "semantic-ui-react";
import { excerpt } from "../../util";

export default ({ movie }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    console.log("4")
    getMovieReviews(movie.id).then(reviews => {
      setReviews(reviews);
    });
  }, []);
  console.log("5")
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">Author</Table.HeaderCell>
          <Table.HeaderCell scope="col">Excerpt</Table.HeaderCell>
          <Table.HeaderCell scope="col">More</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {reviews.map(r => {
          return (
            <Table.Row key={r.id}>
              <Table.Cell>{r.author}</Table.Cell>
              <Table.Cell>{excerpt(r.content)}</Table.Cell>
              <Table.Cell>
                {" "}
                  <Link
                    to={{
                      pathname: `/reviews/${r.id}`,
                      state: {
                        review: r,
                        movie: movie
                      }
                    }}
                  >
                  <Button class="ui button" animated='vertical' color="yellow" fluid>
                    <Button.Content hidden>
                      <Icon name='angle double right' />
                    </Button.Content>
                    <Button.Content visible>
                      Full Review
                    </Button.Content>
                  </Button>
                  </Link>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};