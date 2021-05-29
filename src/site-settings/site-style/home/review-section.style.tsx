import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const ReviewArea = styled.div`
  .flickity-viewport {
    height: 345px !important;
  }
  @media screen and (max-width: 992px) {
    .flickity-viewport {
      height: 244px !important;
    }
  }
`;
export const GiftSection = styled.div`
  & .flickity-viewport {
    height: 244px !important;
  }

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`;
export const ReviewTitle = styled.h2`
  padding: 77px 300px 0 300px;
  text-align: center;
  @media screen and (max-width: 992px) {
    padding: 74px 30px 0 30px;
    font-size: 24px;
  }
`;

export const GitfTitle = styled.h2`
  padding: 77px 300px 0 300px;
  text-align: center;
  @media screen and (max-width: 992px) {
    padding: 40px 0 0 0;
    font-size: 24px;
  }
`;
export const WavyDiv = styled.div`
  position: absolute;
  right: 5%;
  top: 51px;
  & svg {
    fill: #f3eded;
  }
  @media screen and (max-width: 992px) {
    right: -20%;
    max-width: 400px;
  }
  @media screen and (max-width: 480px) {
    top: 91px;
    right: -73%;
  }
`;

export const GradientContainer = styled.div`
  background: linear-gradient(
    150.52deg,
    #fff6ee 2.7%,
    rgba(254, 249, 245, 0) 60.16%
  );
  border-top-left-radius: 200px;
  border-bottom-left-radius: 200px;
  position: relative;
  @media screen and (max-width: 768px) {
    margin: 165px 0 0 0;
    border-top-left-radius: 150px;
    border-bottom-left-radius: 150px;
  }
`;
export const ReviewBtn = styled.div`
  display: flex;
  justify-content: center;
`;
export const IconsDiv = styled.div`
  width: 100%;
  height: 0;
  padding: 0 0 160px 0;
  position: relative;
  z-index: 10;
`;
export const CircleBg = styled.div`
  position: relative !important;
  height: 30px;
  width: 30px;
  background: #fdbda1;
  top: 16px;
  left: 49%;
  @media screen and (max-width: 768px) {
    top: 26px;

    left: 41%;
  }
  @media screen and (max-width: 480px) {
    top: 36px;
    left: 31%;
  }
`;
export const CircleMd = styled.div`
  height: 10px;
  width: 10px;
  top: 87px;
  left: 37%;
  background: #dad5c6;
  position: relative !important;

  @media screen and (max-width: 768px) {
    left: 14%;
  }
  @media screen and (max-width: 480px) {
    top: 57px;

    left: 10%;
  }
`;
export const CirclePat = styled.div`
  left: 70px;
  top: 67px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
