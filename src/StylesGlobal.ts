import styled, { createGlobalStyle } from "styled-components";
// import { ORDERSTATUS } from "./api/data";

export const StyleGlobal = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #0000;
    box-sizing: border-box;
    font-family: 'Poppins';
  }
`;

export const ContainerGlobal = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  max-width: 1444px;
  margin: 20px auto;
  
`;


export const Name = styled.h1`
  font-size: 30px;
  color: #f97316;
  text-align: center;
  cursor: pointer;
`;


