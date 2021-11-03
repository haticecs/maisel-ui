import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  ${mobile({
    margin: "0px 20px",
  })}
`;

const Filter = styled.div`
  ${mobile({
    display: "flex",
    flexDirection: "column",
  })}
`;

const FilterText = styled.span`
  font-weight: 600;
  font-size: 20px;
  margin-right: 20px;

  ${mobile({
    marginRight: "0px",
  })}
`;

const Select = styled.select`
  margin-right: 20px;
  padding: 10px;
  font-size: 20px;

  ${mobile({
    marginRight: "0px",
    margin: "5px 0px",
    fontSize: "14px",
  })}
`;

const Option = styled.option``;

export {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
};
