import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import splash1 from "../../assets/images/splash1.png";
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #faf0e6;
  position: absolute;
  top: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  bottom: 0;
  margin: auto;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;
const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #${(props) => props.bcg};
`;

const ImgContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 40px;
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

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bcg="f5fafd">
          <ImgContainer>
            <Image src={splash1} />
          </ImgContainer>
          <InfoContainer>
            <Title>FALL SALE</Title>
            <Description>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
            </Description>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
        <Slide bcg="fcf1ed">
          <ImgContainer>
            <Image src={splash1} />
          </ImgContainer>
          <InfoContainer>
            <Title>FALL SALE</Title>
            <Description>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
            </Description>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
        <Slide bcg="fbf0f4">
          <ImgContainer>
            <Image src={splash1} />
          </ImgContainer>
          <InfoContainer>
            <Title>FALL SALE</Title>
            <Description>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
            </Description>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
