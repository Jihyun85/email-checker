import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Title from "./components/Title";
import EmailContainer from "./containers/EmailContainer";
import theme from "./styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container className="container">
        <Title />
        <EmailContainer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
