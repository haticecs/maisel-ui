import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => `linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url(${props.image}) center`};
`;

/* Wrapper width will change in the login and register pages
 */
export const Wrapper = styled.div`
  background: white;
  padding: 20px;
  width: ${(props) => props.width};
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  font-size: 16px;
`;

/* Login page has only two inputs that's why we can make it column direction
 */
export const Form = styled.form`
  display: flex;
  flex-wrap: ${(props) => props.type === "register" && "wrap"};
  flex-direction: ${(props) => props.type === "login" && "column"};

  /* The input margin changes depending on the form type. Thus, we define it inside form */
  ${Input} {
    margin: ${(props) =>
      props.type === "register" ? "20px 10px 0px 0px" : "10px 0px"};
  }
`;

export const Agreement = styled.p`
  margin: 20px 0px;
  font-size: 18px;
`;

export const Button = styled.button`
  margin: 10px 0px;
  width: 40%;
  border: none;
  background-color: #c9002e;
  color: white;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;

export const Link = styled.a`
  margin: 10px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;
