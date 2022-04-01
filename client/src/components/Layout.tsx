import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

function Layout({ children }): JSX.Element {
  return (
    <Container>
      <Content>{children}</Content>
      <Menu>
        <Link to="/overview">Overivew</Link>
        <Link to="/add">Add</Link>
      </Menu>
    </Container>
  );
}

const Link = styled(RouterLink)`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5px;
  border: 1px solid;
  @media only screen and (max-width: 600px) {
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
