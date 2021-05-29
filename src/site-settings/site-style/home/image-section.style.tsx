import styled from "styled-components";

export const ImageArea = styled.div`
  .container {
    padding: 150px 100px 140px 100px;
  }
  @media screen and (max-width: 768px) {
    .container {
      padding: 150px 15px 25px 15px;
    }
  }
`;
export const ImageDiv = styled.div`
  display: grid;
  grid-template-columns: 57% 40%;
  column-gap: 3%;
  @media screen and (max-width: 920px) {
    display: flex;
    flex-direction: column;
  }
`;
export const CircleBg = styled.div`
  height: 488px;
  width: 488px;
  top: 244px;
  left: -17%;
  background: linear-gradient(
    223.68deg,
    #ffded6 -14.37%,
    rgba(255, 222, 214, 0) 75.57%
  );
  z-index: 1;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const CircleMd = styled.div`
  height: 244px;
  width: 244px;
  top: 94px;
  right: 492px;
  background: linear-gradient(
    125.58deg,
    #f7e9e5 31.72%,
    rgba(247, 233, 229, 0) 115.52%
  );
  z-index: 1;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
export const CircleSm = styled.div`
  height: 56px;
  width: 56px;
  top: 240px;
  right: 13%;
  background: #fdbda1;
  @media screen and (max-width: 1152px) {
    display: none;
  }
`;
export const WebLineDiv = styled.div`
  & svg {
    fill: #f2ecec;
  }
  position: absolute;
  top: 65px;
  left: 83px;
  z-index: -1px;
  @media screen and (max-width: 1024px) {
    top: 50px;
  }
  @media screen and (max-width: 768px) {
    left: -20%;
    top: 65px;
    max-width: 290px;
  }
  @media screen and (max-width: 425px) {
    transform: scale(0.7);
    left: -40%;
    top: 65px;
    max-width: 290px;
  }
`;

export const SectionRight = styled.div`
  align-self: flex-end;
  padding: 0 0 90px 0;

  & h3 {
    font-size: 48px;
    font-weight: 800;
    line-height: 130%;
  }

  @media screen and (max-width: 920px) {
    padding: 0 0 0px 0;
    & h3 {
      font-size: 36px;
      padding: 35px 0 0px 0;
      & span {
        &:first-of-type {
        }
      }
    }
  }
`;
export const SectionLeft = styled.div`
  z-index: 10;
`;
