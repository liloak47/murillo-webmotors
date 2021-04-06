import { createGlobalStyle } from "styled-components";

export const COLORS = {
  primary: "#f51344",
  secondary: " #f3f5f8",
  default: "#fff",
  greyBasic: "#95939d",
};
export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  div{
    box-sizing: border-box
  }
  html{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  figure{
    margin:0;
    padding:0;
  }
  ul{
    margin:0;
    padding:0;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
`;
