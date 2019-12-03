import React from "react";
import styled from "styled-components";

const Name = styled.h3`
  margin: 10px 20px;
`;

export default ({ name }) => {
  return <Name>{name}</Name>;
};
