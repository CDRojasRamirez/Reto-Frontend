import styled from "styled-components";

export const FilterListHeader = styled.header`
  width: 100%;
  overflow: hidden;
  background-color: #232323;
  position: fixed;
  z-index: 999;
  @media (max-width: 768px) {
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    padding: 10px 0;
  }

  @media (max-width: 320px) {
    padding: 0px 0;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0px;
    @media (min-width: 540px) {
      gap: 20px;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 20px;
  }
`;

export const FilterLabel = styled.li<{ $isSelected: boolean }>`
  margin: 0 20px;
  font-size: 15px;
  color: white;
  cursor: pointer;
  font-weight: ${(props) => (props.$isSelected ? "bold" : "normal")};
  border-bottom: ${(props) => (props.$isSelected ? "2px solid white" : "none")};
  padding-bottom: 2px;
  @media (max-width: 480px) {
    font-size: 12px;
  }

  @media (max-width: 540px) {
    font-size: 12px;
    margin: 0 5px;
  }
`;
