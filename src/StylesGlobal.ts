import styled, { createGlobalStyle } from "styled-components";
import { ORDERSTATUS } from "./Data/Data";

export const StyleGlobal = createGlobalStyle`
  body {
    font-family: 'Poppins', system-ui, Avenir, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #323232;
    box-sizing: border-box;
    overflow: auto;
    overflow-x: hidden;
    width: 100vw;
  }
`;

export const ContainerGlobal = styled.div`
  width: 100%;
  min-height: fit-content;
  max-width: 1200px;
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
  width: 95%;
  margin: auto;
  padding-top: 80px;

  @media (min-width: 540px) {
    padding-top: 60px;
  }
`;

export const Button = styled.button<{ $buttonstyle?: string }>`
  z-index: 90;
  background-color: ${(props) =>
    props.$buttonstyle === ORDERSTATUS.IN_PROCESS
      ? "#7b00ff"
      : props.$buttonstyle === ORDERSTATUS.CANCELLED
      ? "#ff0000"
      : "#20ce00"};
  color: #fff7ed;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  box-shadow: ${(props) =>
    props.$buttonstyle === ORDERSTATUS.IN_PROCESS
      ? "0 0 1rem rgba(130,0,250,1) "
      : props.$buttonstyle === ORDERSTATUS.CANCELLED
      ? "0 0 1rem rgba(255,5,84,1)"
      : "0 0 1rem rgba(1,220,1,200)"};

  &:hover {
    background-color: ${(props) =>
      props.$buttonstyle === ORDERSTATUS.IN_PROCESS
        ? "#7b00ff"
        : props.$buttonstyle === ORDERSTATUS.CANCELLED
        ? "#ff0000"
        : "#20ce00"};
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
  margin: 0px;
  position: relative;
  min-width: auto;
  width: 100%;
  max-width: 300px;
  padding: 20px;
  background: #232323;
  border-radius: 10px;
  height: auto;
  min-height: 300px;
  cursor: pointer;
  box-shadow: "0 0 10rem rgba(255,5,84,1)";

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
