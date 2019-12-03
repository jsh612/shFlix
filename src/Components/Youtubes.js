import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

const Yotubee = styled(YouTube)`
  margin-top: 10px;
  z-index: 10;
  @media screen and (max-width: 414px) {
    height: 100%;
    width: 100%;
  }
`;

export default ({ id }) => {
  return <Yotubee videoId={id} opts={{ height: "300px", width: "70%" }} />;
};
