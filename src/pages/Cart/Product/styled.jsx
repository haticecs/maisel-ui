import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  margin-right: 30px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductID = styled.span``;
const ProductSize = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Amount = styled.span`
  font-size: 24px;
  margin: 10px;
`;

const Price = styled.h1`
  font-weight: 300;
  font-size: 30px;
`;

export {
  ProductContainer,
  Image,
  ProductDetail,
  Details,
  ProductName,
  ProductID,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  Amount,
  Price,
};
