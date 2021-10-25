import styled from "styled-components";
import CategoryItem from "./CategoriesItem/index";
import { categories } from "../../data";

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const index = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default index;
