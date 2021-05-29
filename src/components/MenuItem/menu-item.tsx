import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { themeGet } from "@styled-system/theme-get";
import { useRouter } from "next/router";

type Props = {
  title: string;
  image: any;
  herf: string;
};
const StyledItem = styled.div`
  margin-left: -50px;
  margin-bottom: 6px;
  display: grid;
  grid-template-columns: 50px auto 88px;
  border: 0px solid;
  border-radius: 20px !important;
  padding: 9px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  &:active {
    transform: scale(0.95);
  }
`;
const Title = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;

const ItemImage = styled.div``;

const MenuItem: React.FC<Props> = ({ title, image, herf }) => {
  return (
    <Link href={herf}>
      <StyledItem>
        <div></div>
        <Title>{title}</Title>
        <ItemImage>
          <img src={image} alt={title}></img>
        </ItemImage>
      </StyledItem>
    </Link>
  );
};

export default MenuItem;
