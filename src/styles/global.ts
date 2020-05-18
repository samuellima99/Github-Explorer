import { createGlobalStyle } from "styled-components";

import githubBackground from "../assets/github-background.svg";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body {
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
    background-size: 40%;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 30px 20px;
  }

  button {
    cursor: pointer;
  }
`;
