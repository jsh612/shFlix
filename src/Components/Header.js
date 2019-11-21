import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 1);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  align-items: center;
  height: 50px;
  border-bottom: 5px solid ${props => (props.current ? "red" : "transperate")};
  transition: border-bottom 0.3s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    {console.log(pathname)}
    <List>
      <Item current={"/" === pathname}>
        <SLink to="/">Home</SLink>
      </Item>
      <Item current={"/tv" === pathname}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={"/search" === pathname}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));

// // 위와 동일
// const HeaderC = props => (
//   <Header>
//     {console.log(props.location.pathname)}
//     <List>
//       <Item current={"/" === props.location.pathname}>
//         <SLink to="/">Home</SLink>
//       </Item>
//       <Item current={"/tv" === props.location.pathname}>
//         <SLink to="/tv">TV</SLink>
//       </Item>
//       <Item current={"/search" === props.location.pathname}>
//         <SLink to="/search">Search</SLink>
//       </Item>
//     </List>
//   </Header>
// );

// export default withRouter(HeaderC);
