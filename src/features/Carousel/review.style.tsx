import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const ReviewSection = styled.div`
  height: 345px !important;
  padding: 90px 0 80px 0;
  .flickity-viewport {
    height: 345px !important;
  }
  @media screen and (max-width: 992px) {
    height: fit-content !important;

    .flickity-viewport {
      height: 400px !important;
    }
  }
  @media screen and (max-width: 768px) {
    height: fit-content !important;
    padding: 78px 0 74px 0;

    .flickity-viewport {
      height: 400px !important;
    }
  }
  @media screen and (max-width: 480px) {
    height: fit-content !important;
    padding: 48px 0 44px 0;
    .flickity-viewport {
      height: 344px !important;
    }
  }
`;
export const CarouselsCell = styled.div`
  width: auto;
  /* half-width */
  margin-right: 10px;
  // opacity: 0.6;
  transition: 0.6s ease-in;

  @media screen and (max-width: 992px) {
    width: 40%;
  }
  @media screen and (max-width: 678px) {
    width: 50%;
  }
  @media screen and (max-width: 480px) {
    width: 60%;
  }
  @media screen and (max-width: 375px) {
    width: 70%;
  }
`;
export const ReviewSlide = styled.div`
  display: grid;
  grid-template-columns: 210px 275px;
  column-gap: 20px;
  @media screen and (max-width: 992px) {
    display: flex;
    flex-direction: column;
    & img {
      padding: 0 20px;
    }
  }
`;
export const SlideText = styled.div`
  & h6 {
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    padding: 0 0 20px 0;
  }

  & p {
    font-size: 14px;
    line-height: 140%;
    color: #8f8f8f;
  }
  @media screen and (max-width: 992px) {
    max-width: 90%;
    text-align: center;
  }
`;
