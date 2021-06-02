import react from "react";
import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 29px 24px;
  margin: 20px;
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
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionHeader = styled.div`
  & h5 {
    margin-bottom: 28px;
  }
`;

export const PriceTitle = styled.div`
  margin-bottom: 34px;
  & p {
    font-weight: bold !important;
    font-size: 30px !important;
    line-height: 37px;
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
