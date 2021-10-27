import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

import { Container, Circle, Image, Info, Icon } from "./styled";

const ProductItem = ({ item }) => (
  <Container>
    <Circle />
    <Image src={item.img} />
    <Info>
      <Icon>
        <ShoppingCartOutlined />
      </Icon>
      <Icon>
        <SearchOutlined />
      </Icon>
      <Icon>
        <FavoriteBorderOutlined />
      </Icon>
    </Info>
  </Container>
);
export default ProductItem;
