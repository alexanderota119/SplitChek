import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// color: ${themeGet("colors.text.bold", "#0D1136")};

export const HeroArea = styled.div`
  a {
    text-decoration: underline;
    color: ${themeGet("colors.orange.regular")};
    font-size: 14px;
  }
`;
export const HeroHeader = styled.h2`
  padding: 60px 0 26px 0;
  line-height: 130%;
  letter-spacing: 1px;
  @media screen and (max-width: 992px) {
    font-size: 24px;
  }
  @media screen and (max-width: 928px) {
    padding: 24px 0 26px 0;
  }
  @media screen and (max-width: 425px) {
    padding: 0 0 26px 0;
  }
`;
export const Divider = styled.div`
  margin: 22px 0 22px 0;
`;
export const HeroInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  @media screen and (max-width: 928px) {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
  }
`;
export const DescView = styled.div``;

export const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    max-width: 100%;
  }
  @media screen and (max-width: 480px) {
    padding: 0 10px;
    min-width: 296px;
  }
`;
export const HeroDesc = styled.p`
  font-size: 16px;
  line-height: 22.4px;

  &:last-of-type {
    padding-bottom: 28px;
  }
`;
export const HeroActions = styled.div`
  width: 50%;
  @media screen and (max-width: 370px) {
    & button {
      font-size: 12px;
    }
  }
`;
export const HeroButtonGroup = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  & button {
    &:first-child {
      margin-right: 20px;
      @media screen and (max-width: 480px) {
        margin-right: 16px;
      }
    }
  }
`;
export const HeroCircle = styled.div`
  bottom: -8%;
  right: 6%;
  height: 50px;
  width: 50px;
  background: #f3e5e8;
  z-index: -1;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const SplitTitle = styled.h1`
  display: none;
  @media screen and (max-width: 425px) {
    display: block;
    font-weight: 800;
    line-height: 130%;
    text-align: center;
    color: #adadad;
    position: relative;
    font-size: 30px;
  }
`;

export const WebLineDiv = styled.div`
  & svg {
    fill: #f2ecec;
  }

  @media screen and (max-width: 425px) {
    margin-top: 10px;
    transform: scale(0.5);
  }
`;
