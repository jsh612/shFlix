import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  display: flex;
`;

const Image = styled.img`
  width: 150px;
  height: 200px;
  margin: 20px 0 20px 20px;
`;

const SeasonName = styled.span`
  position: absolute;
  font-size: 15px;
  bottom: 30px;
  left: 75px;
  font-weight: 800;
  color: red;
`;

export default ({ poster_path, name, id }) => {
  return (
    <Container>
      <SeasonName>{name}</SeasonName>
      <Image
        alt="seasons_poster"
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
      />
    </Container>
  );
};
