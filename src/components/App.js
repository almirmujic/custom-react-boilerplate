import React, { Component } from "react";
import styled from "styled-components";
import { Smiley } from "styled-icons/octicons/Smiley";
import { GlobalStyle } from "./Cssreset";
import "./App.scss";

const StyledHeader = styled.h2`
  color: #7bddca;
  text-align: center;
  margin-top: 4rem;
`;

const StyledLink = styled.a`
  color: #2dcba6;
  ${StyledLink}:hover {
    color: purple;
  }
`;

export class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        {/* Imported simple Css Reset file to add border-box sizing and removed predefined browser margins/paddings */}

        <h1>This is the entry App file!</h1>
        <StyledHeader>
          This was styled using{" "}
          <StyledLink href="https://www.styled-components.com/" target="_blank">
            styled components
          </StyledLink>{" "}
          and{" "}
          <StyledLink href="https://styled-icons.js.org/" target="_blank">
            icons
          </StyledLink>
          ! <Smiley size="50px" />
        </StyledHeader>
      </div>
    );
  }
}

export default App;
