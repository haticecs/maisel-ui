import { Container, Wrapper, Title, Form, Input, Button, Link } from "./styled";

const Register = () => {
  return (
    <Container image="https://i.ibb.co/SsBC2YP/maisel2.jpg">
      <Wrapper width="25%">
        <Title> SIGN IN </Title>
        <Form type="login">
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link> DO NOT REMEMBER YOUR PASSWORD?</Link>
          <Link> CREATE NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
