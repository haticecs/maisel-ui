import styled from "styled-components";

/* info covers whole area of container. 
With flex and positioning we justify Icons in the center.
 */ export const Info = styled.div`
  opacity: 0;
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  z-index: 3;
  cursor: pointer;
`;

export const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 350px;
  min-width: 280px;
  background-color: #e6ffe6;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  /* Icons(Info) will appear only when the container is hovered */
  &:hover ${Info} {
    opacity: 0.8;
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #f5fbfd;
  z-index: 1;
`;

export const Image = styled.img`
  position: absolute;
  height: 75%;
  z-index: 2;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  margin: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5 ease;

  /* When it is hovered, the icons will be bigger */
  &:hover {
    transform: scale(1.3);
  }
`;
