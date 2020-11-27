import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import ClickMovie from "./routes/ClickMovie";
import Home from "./routes/Home";
import Main from "./routes/Main";
import GlobalStyles from "./styles/GlobalStyles";
import Theme from "./styles/Theme";

const Wrapper = styled.div `
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <BrowserRouter className="App">
        <Switch>
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/movie/:id" component={ClickMovie} />
            <Redirect path="*" to="/" />
          </Wrapper>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
