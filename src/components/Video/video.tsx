import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

type Props = {
  title: string;
  image: any;
  src: string;
};
const StyledItem = styled.div`
  &:active {
    transform: scale(0.95);
  }
`;

const ItemImage = styled.div``;

const MenuItem: React.FC<Props> = ({ title, image, src }) => {
  return (
    <StyledItem>
      <img src={image} alt={title}></img>
    </StyledItem>
  );
};

export default MenuItem;
