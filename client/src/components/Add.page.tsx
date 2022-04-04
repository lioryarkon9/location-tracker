import React from "react";
import styled from "styled-components";
import toast, { Toaster } from "react-hot-toast";

import * as apis from "../apis";
import { theme } from "../theme";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ProgressBar from "@mui/material/LinearProgress";

function Add(): JSX.Element {
  const [country, setCountry] = React.useState<string>("");
  const [users, setUsers] = React.useState<string>("");
  const [isSumbitting, setIsSubmitting] = React.useState<boolean>(false);

  async function submit() {
    setIsSubmitting(true);

    try {
      await apis.addUsersByCountry(country, users);

      toast.success("submitted successfully");
    } catch (error) {
      console.error(error);
      toast.error("something went wrong - try again later");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Container>
      <Toaster />
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
        <hr />

        {isSumbitting && <ProgressBar />}

        <Button variant="contained" fullWidth onClick={submit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

const Form = styled.form`
  background-color: ${theme.colors.boxBackground};
  box-shadow: ${theme.boxShadow};
  border-radius: ${theme.borderRadius};
  width: 600px;
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
