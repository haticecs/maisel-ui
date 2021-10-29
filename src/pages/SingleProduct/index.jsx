import { useState } from "react";
import {
  Remove,
  Add,
  ArrowForwardIos,
  ArrowBackIos,
} from "@mui/icons-material/";
import { singleProductImages } from "../../data";
import { NavBar, Announcement, Newsletter, Footer } from "../../components";
import {
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
} from "./styled";

const SingleProduct = () => {
  /* ImageSlider via imageIndex */
  const [imageIndex, setImageIndex] = useState(0);
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    setAmount(amount + 1);
  };
  const decreaseAmount = () => {
    setAmount(amount > 0 ? amount - 1 : 0);
  };

  /*Slider image change handler via arrows and direction prop*/
  const imageChangeHandler = (direction) => {
    if (direction === "left") {
      setImageIndex(
        imageIndex > 0 ? imageIndex - 1 : singleProductImages.length - 1
      );
    } else {
      setImageIndex(
        imageIndex < singleProductImages.length - 1 ? imageIndex + 1 : 0
      );
    }
  };

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <ArrowContainer
            direction="left"
            onClick={() => imageChangeHandler("left")}
          >
            <ArrowBackIos />
          </ArrowContainer>
          <Image
            src={singleProductImages[imageIndex].img}
            key={singleProductImages[imageIndex].id}
          />
          <ArrowContainer
            direction="right"
            onClick={() => imageChangeHandler("right")}
          >
            <ArrowForwardIos />
          </ArrowContainer>
        </ImageContainer>
        <InfoContainer>
          <Title>SHORT PUFFY JACKET</Title>
          <Desc>
            Short fluffy jacket in a slightly shiny fabric. Stand-up collar,
            front zip fastening, long sleeves. Welt front pockets and an
            elasticated hem. Lined.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="white" />
              <FilterColor color="pink" />
              <FilterColor color="yellow" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption selected>XS</FilterSizeOption>
                <FilterSizeOption selected>S</FilterSizeOption>
                <FilterSizeOption selected>M</FilterSizeOption>
                <FilterSizeOption selected>L</FilterSizeOption>
                <FilterSizeOption selected>XL</FilterSizeOption>
                <FilterSizeOption selected>2XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <AmountIconContainer
                borderDirection="right"
                onClick={() => decreaseAmount()}
              >
                <Remove />
              </AmountIconContainer>
              <Amount>{amount}</Amount>
              <AmountIconContainer
                borderDirection="left"
                onClick={() => increaseAmount()}
              >
                <Add />
              </AmountIconContainer>
            </AmountContainer>
            <AddButton>ADD TO CART</AddButton>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
