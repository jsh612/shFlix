import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 150px;
  height: 100px;
  margin: 20px 0 20px 20px;
`;

export default ({ logo_path }) => {
  return (
    <Image alt="logo" src={`https://image.tmdb.org/t/p/w300${logo_path}`} />
  );
};
