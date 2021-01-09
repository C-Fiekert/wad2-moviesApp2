import React from "react";
import { Table } from "semantic-ui-react";
import "./actorDetails.css";

export default ({ person }) => {

  return (
    <>
      <h4 style={{color:"white"}}>Biography</h4>
      <p  style={{color:"white"}}>{person.biography}</p>
      <Table celled>
        <Table.Body>
          <Table.Row>
            <Table.Cell active>Birthday</Table.Cell>
            <Table.Cell>{person.birthday}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell active>Death Date</Table.Cell>
            <Table.Cell>{person.deathday}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell active>Known For</Table.Cell>
            <Table.Cell>{person.known_for_department}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell active>Gender</Table.Cell>
            <Table.Cell>{person.gender}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell active>Place of Birth</Table.Cell>
            <Table.Cell>{person.place_of_birth}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell active>Popularity</Table.Cell>
            <Table.Cell>{person.popularity}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};