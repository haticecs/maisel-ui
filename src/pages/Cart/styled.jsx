import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px 10px;
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 36px;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  border: ${(props) => props.type === "filled" && "none"};
  color: ${(props) => props.type === "filled" && "white"};
  padding: 10px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const TopTextsContainer = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  padding: 20px 10px;
`;

/*Left part of the bottom*/
const CartInfo = styled.div`
  flex: 3;
  padding: 10px;
`;

const HR = styled.hr`
  background-color: #eee;
  height: 1px;
  border: none;
`;

/*Right part of the bottom*/
const OrderSummary = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  text-align: center;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => (props.type === "total" ? "24px" : "18px")};
  font-weight: ${(props) => props.type === "total" && "500"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: black;
  color: white;
  border: none;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
`;

export {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopText,
  TopTextsContainer,
  Bottom,
  CartInfo,
  OrderSummary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  SummaryButton,
  HR,
};
