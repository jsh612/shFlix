import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  /* css 단위 : https://webclub.tistory.com/356 */
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: ${props => props.color};
`;

const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Message.propsTypes = {
  text: PropsTypes.string.isRequired,
  color: PropsTypes.string.isRequired
};

export default Message;
