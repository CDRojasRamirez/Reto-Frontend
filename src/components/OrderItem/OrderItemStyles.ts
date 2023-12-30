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
  padding: 5px 0px;
  display: flex;
  align-items: center;
  margin: auto;
`;

export const OrderItemStatus = styled.p`
  position: absolute;
  left: 20px;
  top: 290px;
  font-size: 0.9rem;
  font-weight: 800;
  margin: 0;
  text-align: left;
  padding: 5px 0px;
  display: flex;
  align-items: center;
`;

export const OrderItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: auto;
  min-height: 150px;
`;

export const OrderItemIconContainer = styled.span`
  display: flex;
  align-items: center;
  padding: 0px 10px;
`;

export const OrderItemImage = styled.img`
position: relative;
  width: 100%;
  height: 300px;
  max-height: 300px;
  min-height: auto;
  object-fit: cover;
`;

export const OrderItemButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  padding: 10px 10px;
  display: flex;
  align-items: center;
`;