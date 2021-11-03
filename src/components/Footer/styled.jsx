import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1`
  margin-bottom: 20px;
`;

const Desc = styled.p`
  margin-bottom: 20px;
  font-weight: 500;
`;

const SocialIconContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  color: white;
  margin-right: 20px;
  cursor: pointer;
  translate: all 0.5 ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  list-style: none;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-weight: 500;
  cursor: pointer;
  translate: all 0.5 ease;

  &:hover {
    color: #c9002e;
    transform: scale(1.1);
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Payments = styled.img`
  width: 50%;
`;

export {
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
};
