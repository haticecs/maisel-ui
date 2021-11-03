import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ flexDirection: "column", padding: "10px" })}
`;
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  height: 100vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  ${mobile({ height: "40vh" })}
  object-fit: cover;
`;

/* direction prop to place the arrows in the sides of Image container.*/
const ArrowContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 3px;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && 0};
  right: ${(props) => props.direction === "right" && 0};
  margin: auto;
  border-radius: 50%;
  background-color: #f8f4f4;
  color: #c9002e;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    background-color: white;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  margin: 0px 50px;
  ${mobile({ margin: "20px 10px" })}
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 300;
  ${mobile({ fontSize: "30px", textAlign: "center" })}
`;

const Desc = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 30px 0px;
  ${mobile({ margin: "20px 0px", fontSize: "14px" })}
`;

const Price = styled.span`
  font-size: 40px;
  font-weight: 200;
  ${mobile({ fontSize: "30px" })}
`;

const FilterContainer = styled.div`
  display: flex;
  width: 70%;
  margin: 50px 0px;
  justify-content: space-between;
  ${mobile({ margin: "40px 0px", width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  margin-right: 10px;
  ${mobile({ fontSize: "16px" })}
`;

const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid lightgray;
  margin-right: 10px;
  cursor: pointer;
  ${mobile({ width: "20px", height: "20px" })}
`;

const FilterSize = styled.select`
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  margin: 50px 0px;
  justify-content: space-between;
  ${mobile({ margin: "30px  0px", width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid lightgray;
`;

const Amount = styled.span`
  width: 40px;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  margin: 0px 10px;
  padding: 10px;
  ${mobile({ width: "20px", fontSize: "16px" })}
`;

/* borderDirection prop to border the sides properly in the inner of the container*/
const AmountIconContainer = styled.div`
  display: flex;
  align-items: center;
  border-right: ${(props) =>
    props.borderDirection === "right" && "2px solid lightgray"};
  border-left: ${(props) =>
    props.borderDirection === "left" && "2px solid lightgray"};
  cursor: pointer;
  padding: 5px;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const AddButton = styled.button`
  background-color: white;
  padding: 10px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #f8f4f4;
  }
`;

export {
  Container,
  Wrapper,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  AmountIconContainer,
  Amount,
  AddButton,
  ArrowContainer,
};
