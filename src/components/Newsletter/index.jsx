import { Send } from "@mui/icons-material";
import {
  Container,
  Title,
  Desc,
  InputContainer,
  Input,
  Button,
} from "./styled";

const Newsletter = () => (
  <Container>
    <Title>Newsletter</Title>
    <Desc>Get timely updates from your favorite products</Desc>
    <InputContainer>
      <Input placeholder="Your email" />
      <Button>
        <Send />
      </Button>
    </InputContainer>
  </Container>
);
export default Newsletter;
