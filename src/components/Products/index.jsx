import styled from "styled-components";
import { popularProducts } from "../../data";
import ProductItem from "./ProductItem";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
