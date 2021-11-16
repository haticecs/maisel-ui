import styled from "styled-components";

/* info covers whole area of container. 
With flex and positioning we justify Icons in the center.
 */
const Info = styled.div`
  opacity: 0;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5 ease;
  z-index: 3;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 350px;
  min-width: 280px;
  background-color: #fbf0f4;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  /* Icons(Info) will appear only when the container is hovered */
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #f5fbfd;
  z-index: 1;
`;

const Image = styled.img`
  position: absolute;
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5 ease;

  /* When it is hovered, the icons will be bigger */
  &:hover {
    transform: scale(1.2);
  }
`;

export { Container, Circle, Image, Info, Icon };
