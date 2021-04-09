import styled, { createGlobalStyle } from "styled-components";

export const COLORS = {
  primary: "#f51344",
  primaryBtn: "#ca2430",
  secondary: " #f3f5f8",
  default: "#fff",
  greyBasic: "#95939d",
  inpt: "#bcbcbc",
  secondaryBtn: "#d9a649",
};
export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: ${COLORS.secondary}
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
  select{
    background: none;
    border: 1px solid ${COLORS.inpt};
    padding: 5px;
    border-radius: 2px;
    color: ${COLORS.greyBasic};
    &:focus {
        border-color: #000;
      }

  }
  option{
  }
`;

export const Button = styled.button`
  color: ${COLORS.default};
  background-color: ${COLORS.primaryBtn};
  border: none;
  width: 250px;
  padding: 15px 0px;
  font-weight: bold;
  border-radius: 2px;
  transition-duration: 0.5s;
  cursor: pointer;
  @media (max-width: 729px) {
    width: 150%;
  }
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
  ${(props) =>
    props.clear
      ? `color: ${COLORS.greyBasic}; 
      background-color: transparent; 
      border: none; 
      border-color: ${COLORS.secondaryBtn};
      font-weight: normal;
      width: 100px;
      &:hover{
        filter: brightness(100%);
        color: none; 
        background-color: none; 
      }
      `
      : null}
`;

export const Container = styled.div`
  margin: 40px 0px;
  padding: 0px 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  @media (max-width: 729px) {
    padding: 0px 20px;
  }
`;

export const Input = styled.input``;
