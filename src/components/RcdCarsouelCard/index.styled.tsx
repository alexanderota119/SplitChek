import react from "react";
import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 26px 19px;
  margin: 15px;
  @media screen and (max-width: 320px) {
    margin: 5px;
  }
`;

export const CardContainer = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: row;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 130px;
`;

export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 93px;
  min-width: 88.6px;
  & img {
    min-width: 88.6px;
    max-height: 93px;
  }
`;

export const AuthorContainer = styled.div`
  width: 100%;
  & span {
    font-size: 14px !important;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionHeader = styled.div`
  & h5 {
    font-size: 16px;
    margin-bottom: 28px;
    font-weight: bold;
    color: #140a01;
  }
`;

export const PriceTitle = styled.div`
  margin-bottom: 34px;
  & p {
    font-weight: bold !important;
    font-size: 30px !important;
    line-height: 37px;
    color: #140a01;
    margin-bottom: 0px;
  }
`;

export const DescriptionFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & img {
    min-width: 40px;
    min-height: 40px;
  }
  & Button {
    min-width: 122px;
    min-height: 42px;
  }
`;
