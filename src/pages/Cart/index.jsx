import { NavBar, Announcement, Footer } from "../../components";
import Product from "./Product";

import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopText,
  TopTextsContainer,
  Bottom,
  CartInfo,
  OrderSummary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  SummaryButton,
  HR,
} from "./styled";

const Cart = () => (
  <Container>
    <NavBar />
    <Announcement />
    <Wrapper>
      <Title>YOUR BAG</Title>
      <Top>
        <TopButton>CONTUNIE SHOPPING</TopButton>
        <TopTextsContainer>
          <TopText>Shopping Bag(2)</TopText>
          <TopText>Your Wishlist(0)</TopText>
        </TopTextsContainer>
        <TopButton type="filled">CHECKOUT NOW</TopButton>
      </Top>
      <Bottom>
        <CartInfo>
          <Product
            image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
            name="SHOES FOR A WALK"
            id="12546245254"
            color="black"
            size="37.5"
            amount={1}
            price={50}
          />
          <HR />
          <Product
            image="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
            name="PHILZ COOL T-SHIRT"
            id="22145248625"
            color="gray"
            size="M"
            amount={1}
            price={26.99}
          />
        </CartInfo>
        <OrderSummary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>$ 76.99</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>$ 76.99</SummaryItemPrice>
          </SummaryItem>
          <SummaryButton>CHECKOUT NOW</SummaryButton>
        </OrderSummary>
      </Bottom>
    </Wrapper>
    <Footer />
  </Container>
);

export default Cart;
