import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fcf1ed;

  ${mobile({ height: "50vh" })}
`;

const Title = styled.h1`
  font-size: 70px;
  letter-spacing: 1px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "50px" })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 30px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  display: flex;
  width: 50%;
  height: 40px;
  border: 1px solid lightgray;
  cursor: pointer;
  ${mobile({ justifyContent: "center", width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  font-size: 20px;
  ${mobile({ paddingLeft: "10px", fontSize: "18px" })}
`;

const Button = styled.button`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #c9002e;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export { Container, Title, Desc, InputContainer, Input, Button };
