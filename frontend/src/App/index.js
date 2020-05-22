import React from "react";
import Provider from "./context";
import { Container } from "@material-ui/core";
import List from "../Components/List";

const App = () => {
  return (
    <Provider>
      <Container>
        <List />
      </Container>
    </Provider>
  );
};

export default App;
