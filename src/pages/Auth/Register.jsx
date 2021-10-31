import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
} from "./styled";

const Register = () => {
  return (
    <Container image="https://i.ibb.co/dBzjYqX/original.jpg">
      <Wrapper width="50%">
        <Title> BECOME A MEMBER </Title>
        <Form type="register">
          <Input placeholder="name" />
          <Input placeholder="lastname" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, you agree to the{" "}
            <b>Maisel Membership Agreement</b> and <b>PRIVACY POLICY</b>.
          </Agreement>
          <Button>SIGN UP</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
