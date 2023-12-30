import styled, { createGlobalStyle } from "styled-components";
import { ORDERSTATUS } from "./Data/Data";

export const StyleGlobal = createGlobalStyle`
  body {
    font-family: 'Poppins', system-ui, Avenir, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #0000;
    box-sizing: border-box;
    max-width: 100vw;
  }
`;

export const ContainerGlobal = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #0000;
  height: auto;
max-width: 90%;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  
`;


export const FlexContainer = styled.div<{ $column?: string; $center?: string }>`
  display: flex;
  flex-direction: ${(props) => (props.$column ? "column" : "row")};
  justify-content: ${(props) => (props.$center ? "center" : "space-between")};
  align-items: ${(props) => (props.$center ? "center" : "flex-start")};
  flex-wrap: wrap;
  min-height: 100vh;
  height: 100%;
`;

export const Button = styled.button<{ $buttonstyle?: string }>`
  background-color: ${(props) =>
  (props.$buttonstyle === ORDERSTATUS.IN_PROCESS ? "#001bff" :
    props.$buttonstyle === ORDERSTATUS.CANCELLED ? "#ff0000" : "#20ce00")};
  color: #fff7ed;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) =>
  (props.$buttonstyle === ORDERSTATUS.IN_PROCESS ? "#001bff" :
    props.$buttonstyle === ORDERSTATUS.CANCELLED ? "#ff0000" : "#20ce00")};
    color: #fff7ed;
    transform: scale(1.05);
  }
  
  @media (max-width: 350px) {
    margin: 0 10px;
    width: auto;
    max-width: 100%;
    font-size: 10px;
  }
`;

export const Card = styled.div`
margin: 1px;
position: relative;
  min-width:auto;
  width: 100%;
  max-width: 300px;
  padding: 20px;
  border: 1px solid red;
  border-radius: 3px;
  height: auto;
  min-height: 300px;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in-out;
    /* background-color: #fed7aa; */
  }

  @media (max-width: 350px) {
    margin: 0 10px;
    width: auto;
    max-width: 100%;
  }
`;

export const Name = styled.h1`
  font-size: 30px;
  color: #5000ff;
  text-align: center;
  cursor: pointer;
`;


