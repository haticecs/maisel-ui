import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const Left = styled.div`
  flex: 1;
  padding: 20px;
`;
export const Logo = styled.h1`
  margin-bottom: 20px;
`;

export const Desc = styled.p`
  margin-bottom: 20px;
  font-weight: 500;
`;

export const SocialIconContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
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

export const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  list-style: none;
`;

export const ListItem = styled.li`
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

export const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Payments = styled.img`
  width: 50%;
`;
