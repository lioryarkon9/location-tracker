import React, { SyntheticEvent } from "react";
import styled from "styled-components";

import { theme } from "../theme";
import { AddUsersInCountry } from "../types";

import TextField from "@mui/material/TextField";

interface Props {
  addUsersInCountry: AddUsersInCountry;
}

function Add({ addUsersInCountry }: Props): JSX.Element {
  const [country, setCountry] = React.useState<string>("");
  const [users, setUsers] = React.useState<string>("");

  return (
    <Container>
      <Form>
        <TextField
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          label="Country"
          fullWidth
        />
        <hr />
        <TextField
          type="number"
          value={users}
          onChange={(event) => setUsers(event.target.value)}
          label="Users"
          fullWidth
        />
      </Form>
    </Container>
  );
}

const Form = styled.form`
  background-color: ${theme.colors.boxBackground};
  box-shadow: ${theme.boxShadow};
  border-radius: ${theme.borderRadius};
  width: 600px;
  min-height: 300px;
  padding: 5px;
  @media only screen and (max-width: 600px) {
    width: auto;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

export default Add;
