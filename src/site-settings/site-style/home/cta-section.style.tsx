import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const CtaArea = styled.div`
  text-align: center;
`;
export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export const CtnInner = styled.div`
  padding: 0 180px 80px 180px;
  & h3 {
    font-weight: 700;
    font-size: 30px;
    line-height: 130%;
    color: #140a01;
    padding: 0 0 40px 0;
  }
  & p {
    font-size: 16px;
    line-height: 140%;
    color: #434343;
    padding: 0 0 30px 0;
  
  }  
  @media screen and (max-width: 768px) {
    z-index:5;
    padding: 0;
    & h3 {
      font-size: 20px;
      text-align: center;
      padding: 0 0 28px 0;
    }
    & p {
      padding: 0 0 40px 0;
    }
  }
}
`;

export const CircleExtraBig = styled.div`
  bottom: 145px;
  left: 19%;
  height: 50px;
  width: 50px;
  background: #36558f;
  z-index: -1;

  @media screen and (max-width: 768px) {
    display: block;
    bottom: -95px;
    right: auto;
    top: auto;
    left: 4%;
  }
`;

export const CircleBig = styled.div`
  bottom: 124px;
  right: 18%;
  height: 50px;
  width: 50px;
  background: #f77d0e;
  z-index: -1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const CircleMd = styled.div`
  bottom: 174px;
  right: 7%;
  height: 30px;
  width: 30px;
  background: #f77d0e;
  z-index: -1;

  @media screen and (max-width: 768px) {
    diplay: block;
    top: -105px;
    left: 35px;
  }
`;
export const CircleSm = styled.div`
  bottom: 149px;
  left: 4%;
  height: 12px;
  width: 12px;
  background: #f77d0e;
  z-index: -1;

  @media screen and (max-width: 768px) {
    diplay: block;
    bottom: -70px;
    right: 176px;
    top: auto;
    left: auto;
  }
`;
export const CircleExtraSm = styled.div`
  bottom: 296px;
  right: 15%;
  height: 12px;
  width: 12px;
  background: #36558f;
  z-index: -1;
  @media screen and (max-width: 768px) {
    diplay: block;
    top: -75px;
    right: 149px;
  }
`;
export const CircleVerySm = styled.div`
  bottom: 274px;
  left: 12%;
  height: 30px;
  width: 30px;
  background: #f77d0e;
  z-index: -1;

  @media screen and (max-width: 768px) {
    diplay: block;
    bottom: -100px;
    right: 16px;
    top: auto;
    left: auto;
  }
`;

export const CircleUltraSm = styled.div`
  bottom: 121px;
  left: 32%;
  height: 12px;
  width: 12px;
  background: #f77d0e;
  z-index: -1;

  @media screen and (max-width: 768px) {
    top: -56px;
    right: 65px;
    bottom: auto;
    left: auto;
  }
`;
