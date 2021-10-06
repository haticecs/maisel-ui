import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  SearchInput,
  Center,
  Logo,
  Right,
  MenuItem,
} from "./styled";

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> EN </Language>
          <SearchContainer>
            <SearchInput />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MAISEL</Logo>
        </Center>
        <Right>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
