import { createGlobalStyle } from "styled-components";
import backgroundImage from "./images/background-currency.jpeg";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-image: url(${backgroundImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    word-break: break-word;
  }
`;
