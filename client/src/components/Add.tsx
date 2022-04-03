import styled from "styled-components";


import {theme} from "../theme";
import { AddUsersInCountry } from "../types";

import TextField from "@mui/material/TextField";

interface Props {
  addUsersInCountry: AddUsersInCountry;
}

function Add({ addUsersInCountry }: Props): JSX.Element {
  return (
    <Container>
      <Form>
        <div>a</div>
        <div>b</div>
      </Form>
    </Container>
  );
}

const Form = styled.form`
  background-color: ${theme.colors.boxBackground};
  box-shadow: ${theme.boxShadow};
  border-radius: ${theme.borderRadius};
  width: 600px;
  @media only screen and (max-width: 600px){
    width: auto;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`

export default Add;
