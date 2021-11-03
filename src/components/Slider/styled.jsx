import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff7f7;
  position: absolute;
  top: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  bottom: 0;
  margin: auto;
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bgc};
`;

const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
`;

const Image = styled.img`
  height: 90%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 80px;
`;
const Description = styled.p`
  font-size: 20px;
  margin: 50px 0;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
`;

export {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Description,
  Button,
};
