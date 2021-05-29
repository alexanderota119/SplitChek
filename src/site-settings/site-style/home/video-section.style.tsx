import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const VideoSectionArea = styled.section`
  padding: 200px 0 140px 0;
  @media screen and (max-width: 768px) {
    padding: 170px 0 150px 0;
  }
`;
export const VideoInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const InnerimgDiv = styled.div`
  justify-self: flex-end;
`;
export const InnerTxt = styled.div`
  & h2 {
    padding: 0 0 40px 0;
  }

  & p {
    font-size: 16px;
    line-height: 140%;
    color: #434343;
    padding: 0 20px 0 0;
  }
  @media screen and (max-width: 768px) {
    & h2 {
      font-size: 24px;
      text-align: center;
      padding: 0 0 32px 0;
    }
    & p {
      padding: 0 0 47px 0;
    }
  }
`;
export const WavyDiv = styled.div`
  position: absolute;
  top: -200px;
  left: 37%;
  display: flex;
  @media screen and (max-width: 768px) {
    top: -140px;
    left: 30%;
    max-width: 305px;
    transform: scale(0.8);
  }
  @media screen and (max-width: 480px) {
    top: -120px;
    left: 20%;
  }
  @media screen and (max-width: 375px) {
    left: 4%;
  }
  & svg {
    fill: #f2ecec;
  }
`;
export const CircleMonsterSm = styled.div`
  top: 10px;
  left: 40%;
  height: 10px;
  width: 10px;
  background: #dad5c6;
  z-index: -1;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;
