import { Add, Remove } from "@mui/icons-material";
import {
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
} from "./styled";

/*Product component in the cart page.
 We avoid from repeating in the code via required props.
*/

const Product = ({ image, name, id, color, size, amount, price }) => (
  <ProductContainer>
    <ProductDetail>
      <Image src={image} />
      <Details>
        <ProductName>
          <b>Product:</b> {name}
        </ProductName>
        <ProductID>
          <b>ID:</b> {id}
        </ProductID>
        <ProductColor color={color} />
        <ProductSize>
          <b>Size:</b> {size}
        </ProductSize>
      </Details>
    </ProductDetail>
    <PriceDetail>
      <ProductAmountContainer>
        <Add />
        <Amount>{amount}</Amount>
        <Remove />
      </ProductAmountContainer>
      <Price>$ {price}</Price>
    </PriceDetail>
  </ProductContainer>
);

export default Product;
