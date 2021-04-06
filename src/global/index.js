import styled, { createGlobalStyle } from "styled-components";

export const COLORS = {
  primary: "#f51344",
  primaryBtn: "#ca2430",
  secondary: " #f3f5f8",
  default: "#fff",
  greyBasic: "#95939d",
  secondaryBtn: "#d9a649",
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

export const Button = styled.button`
  color: ${COLORS.default};
  background-color: ${COLORS.primaryBtn};
  border: none;
  margin: 50px;
  width: 250px;
  padding: 15px 0px;
  font-weight: bold;
  border-radius: 2px;
  transition-duration: 0.5s;
  &:hover {
    filter: brightness(85%);
  }
  ${(props) =>
    props.sale
      ? `color: ${COLORS.secondaryBtn}; 
      background-color: ${COLORS.default}; 
      border: 2px solid; 
      border-color: ${COLORS.secondaryBtn};
      &:hover{
        filter: brightness(100%);
        color: ${COLORS.default}; 
        background-color: ${COLORS.secondaryBtn}; 
      }
      `
      : null}
`;

export const Input = styled.input`
  margin: 50px;
`;
