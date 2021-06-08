import styled from "styled-components";

export const ProductSectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  & h3 {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #4ecdc4;
    margin-bottom: 26px;
  }
  @media screen and (max-width: 768px) {
    & h3 {
      font-size: 20px;
    }
  }
`;

export const CircleContainer1 = styled.div`
  position: absolute;
  left: -90px;
  top: 130px;
  @media screen and (max-width: 998px) {
    top: 190px;
  }
  @media screen and (max-width: 850px) {
    top: 300px;
  }
  @media screen and (max-width: 782px) {
    top: 350px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CircleContainer2 = styled.div`
  position: absolute;
  left: -35px;
  top: 600px;
  z-index: -1;
  @media screen and (max-width: 998px) {
    top: 800px;
  }
  @media screen and (max-width: 950px) {
    top: 850px;
  }
  @media screen and (max-width: 850px) {
    top: 1000px;
  }
  @media screen and (max-width: 782px) {
    top: 1300px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CircleContainer3 = styled.div`
  position: absolute;
  right: -30px;
  top: 680px;
  z-index: -1;
  @media screen and (max-width: 1011px) {
    top: 810px;
  }
  @media screen and (max-width: 950px) {
    top: 850px;
  }
  @media screen and (max-width: 875px) {
    top: 900px;
  }
  @media screen and (max-width: 782px) {
    top: 1320px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CircleContainer4 = styled.div`
  position: absolute;
  right: -420px;
  top: 100px;
  z-index: -1;
  @media screen and (max-width: 1399px) {
    right: -75px;
    top: 100px;
  }
  @media screen and (max-width: 950px) {
    top: 130px;
  }
`;

export const DotContainer5 = styled.div`
  position: absolute;
  right: -510px;
  top: 550px;
  z-index: -1;
  & img {
    min-width: 178px;
    height: 260px;
  }
  @media screen and (max-width: 1399px) {
    right: -150px;
    top: 3550px;
  }
  @media screen and (max-width: 1018px) {
    right: -150px;
    top: 3800px;
  }
  @media screen and (max-width: 950px) {
    right: -150px;
    top: 4000px;
  }
  @media screen and (max-width: 875px) {
    right: -150px;
    top: 4350px;
  }
  @media screen and (max-width: 782px) {
    right: -150px;
    top: 5700px;
  }
  @media screen and (max-width: 768px) {
    right: -150px;
    display: none;
  }
`;

export const LineContainer = styled.div`
  position: absolute;
  right: -240px;
  top: 250px;
  z-index: -1;
  & img {
    min-width: 420px;
    height: 42px;
  }
`;

export const CircleContainer6 = styled.div`
  position: absolute;
  right: -560px;
  top: 550px;
  z-index: 11;
  @media screen and (max-width: 1399px) {
    right: -200px;
    top: 550px;
  }
`;

export const DotContainer6 = styled.div`
  position: absolute;
  left: -140px;
  top: -330px;
  z-index: 11;
  & img {
    min-width: 178px;
    height: 260px;
  }
`;

export const CircleContainer7 = styled.div`
  position: absolute;
  right: -150px;
  top: 780px;
  z-index: -1;
  @media screen and (max-width: 1399px) {
    right: -90px;
  }
  @media screen and (max-width: 1009px) {
    top: 900px;
  }
  @media screen and (max-width: 925px) {
    top: 1000px;
  }
  @media screen and (max-width: 802px) {
    top: 1200px;
  }
  @media screen and (max-width: 809px) {
    top: 1210px;
  }
`;
