import React, { Component } from "react";
import "normalize.css";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";
import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Blocks from "./Homes/Blocks";
import Main from "./Homes/Main";
import Popular from "./Popular";
import Featured from "./Featured";
import Footer from "./Footer";
import { BrowserRouter, Route } from "react-router-dom";
import Buttons from "./Homes/Buttons";

const Wrapper = styled.div`
  @media (min-width: 976px) {
    max-width: 976px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
  }
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <Grid>
            <Route path="/" component={Header} />
            <Route path="/homes" component={Buttons} />
            <Route path="/homes" component={Blocks} />
            <Route exact path="/" component={Explore} />
            <Route exact path="/" component={Experiences} />
            <Route exact path="/" component={Main} />
            <Route exact path="/" component={Popular} />
            <Route exact path="/" component={Featured} />
            <Route exact path="/" component={Footer} />
          </Grid>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
