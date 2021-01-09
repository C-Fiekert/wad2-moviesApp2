import React from "react";

export default ({ review }) => {
  return (
    <>
      <h4 style={{color:"white"}}>Review By: {review.author}</h4>
      <p  style={{color:"white"}}>{review.content}</p>
    </>
  );
};