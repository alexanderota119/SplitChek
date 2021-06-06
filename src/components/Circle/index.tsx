import styled from "styled-components";

type CircleProps = {
  color: string;
  diameter: string;
};
const CircleDiv = styled.div<CircleProps>`
  width: ${(props) => props.diameter};
  height: ${(props) => props.diameter};

  background: ${(props) => props.color};
  border-radius: 50%;
`;

const Circle = ({ color, diameter }) => {
  return <CircleDiv color={color} diameter={diameter}></CircleDiv>;
};

export default Circle;
