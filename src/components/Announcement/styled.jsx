import styled from "styled-components";
import { mobile } from "../../responsive";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background-color: #c9002e;
  color: white;
  font-size: 14px;
  font-weight: 500;
  ${mobile({
    padding: "5px",
    fontSize: "12px",
  })}
`;
