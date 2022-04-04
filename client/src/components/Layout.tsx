import styled from "styled-components";
import { Link as RouterLink, useLocation } from "react-router-dom";

import {theme} from '../theme';

function Layout({ children }): JSX.Element {
  const {pathname} = useLocation();

  return (
    <Container>
      <Content>{children}</Content>
      <Menu>
        <Link to="/overview" isActive={pathname === "/overview"}>Overivew</Link>
        <Link to="/add" isActive={pathname === "/add"}>Add</Link>
      </Menu>
    </Container>
  );
}

const Link = styled(RouterLink)`
  background-color: ${({isActive}) => isActive ? theme.colors.activeElement : "inherit"};
  color: ${({isActive}) => isActive ? theme.colors.activeFont : "inherit"};
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  box-shadow: ${theme.boxShadow};
  @media only screen and (max-width: 600px) {
    padding: 5px 0;
    align-items: center;
    width: 50%;
  }
`;

const Menu = styled.div`
  height: 100%;
  width: 200px;
  display: block;
  border: 1px solid;
  @media only screen and (max-width: 600px) {
    border: none;
    width: auto;
    height: 10%;
    display: flex;
  }
`;

const Content = styled.div`
  height: 100%;
  flex-grow: 1;
  padding: 10px;
  @media only screen and (max-width: 600px) {
    height: 90%;
  }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row-reverse;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

export default Layout;
