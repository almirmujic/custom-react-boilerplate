import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,:before,:after{
      box-sizing:border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  html{
    height: 100%;
    width: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }
`;
