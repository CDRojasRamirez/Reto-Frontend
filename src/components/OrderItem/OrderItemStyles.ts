import styled from "styled-components";

export const OrderItemTitle = styled.h2`
  position: absolute;
  z-index: 99;
  right: 26px;
  top: 25px;
  background: red;
  color: white;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 1.2rem;
  margin: 0;
  text-align: center;
`;

export const OrderItemText = styled.p`
  font-size: 0.9rem;
  margin: 0;
  text-align: left;
  padding: 2px 0px;
  display: flex;
  align-items: center;
`;

export const OrderItemStatus = styled.p`
  position: absolute;
  left: 10px;
  top: 196px;
  background-color: #232323;
  border-top-right-radius: 10px;
  font-size: 0.8rem;
  font-weight: 700;
  margin: 0;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 540px) {
    top: 198px;
  }
`;

export const OrderItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: auto;
  min-height: 100px;
  color: white;
  margin-top: 10px;
`;

export const OrderItemIconContainer = styled.span`
  display: flex;
  align-items: center;
  padding: 0px 10px;
`;

export const OrderItemImage = styled.img`
  position: relative;
  width: 100%;
  height: 200px;
  max-height: 200px;
  min-height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

export const OrderItemButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  padding: 0px 10px;
`;

export const OrderItemProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: auto;
  padding: 0px 10px;
`;

export const OrderItemProductName = styled.p`
  font-size: 0.9rem;
  margin: 0;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
`;
