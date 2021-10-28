import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
  Room,
  Phone,
  Mail,
} from "@mui/icons-material";

import {
  Container,
  Left,
  Center,
  Right,
  Logo,
  Desc,
  SocialIconContainer,
  SocialIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payments,
} from "./styled";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MAISEL</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialIconContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialIconContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Policies</ListItem>
          <ListItem>Card</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          37 Green Road Path. South Tobinchester. 965241.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} />
          contact@maisel.com
        </ContactItem>
        <Payments src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
