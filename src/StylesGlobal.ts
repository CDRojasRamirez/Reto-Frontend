import styled, { createGlobalStyle } from "styled-components";
// import { ORDERSTATUS } from "./api/data";

export const StyleGlobal = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #0000;
    box-sizing: border-box;
    font-family: 'Poppins';
    max-width: 1280px;
  }
`;

export const ContainerGlobal = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  
`;


export const Name = styled.h1`
  font-size: 30px;
  color: #5000ff;
  text-align: center;
  cursor: pointer;
`;


