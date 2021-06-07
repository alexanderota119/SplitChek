import styled from "styled-components";

export const RecommendSectionArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 42px;
`;

export const RecommendTitle = styled.div`
  & h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
  }
  margin-bottom: 30px;
`;

export const RecommendSliderContainer = styled.div`
  margin-bottom: 42px;
`;

export const RcommendProductOneContainer = styled.div`
  margin-bottom: 30px;
`;

export const RecommendProductsContainer = styled.div``;

export const LineContainer = styled.div`
  position: absolute;
  left: -40px;
  top: 230px;
  z-index: -1;
  & img {
    min-width: 420px;
    height: 42.98px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
