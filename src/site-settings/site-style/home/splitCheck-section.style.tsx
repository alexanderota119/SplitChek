import styled from "styled-components";

export const SplitChekArea = styled.div`
  .hero-title {
    padding: 100px 130px 110px 130px;
    font-weight: 800;
    font-size: 64px;
    line-height: 130%;
    text-align: center;
    color: #adadad;
    position: relative;
    @media screen and (max-width: 768px) {
      padding: 57px 10px 44px 10px;
      font-size: 34px;
    }
  }
`;
export const SplitTitle = styled.h1`
  padding: 100px 130px 110px 130px;
  font-weight: 800;
  font-size: 64px;
  line-height: 130%;
  text-align: center;
  color: #adadad;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 57px 10px 44px 10px;
    font-size: 34px;
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
`;
export const SectionCircleBig = styled.div`
  top: 200px;
  left: 13%;
  background: #fdbda1;
  width: 60px;
  height: 60px;
  z-index: -1;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const SectionCircleMd = styled.div`
  top: 65px;
  left: 6%;
  background: #e7e4e4;
  width: 24px;
  height: 24px;
  z-index: -1;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const SectionCircleSm = styled.div`
  top: 100px;
  left: 22%;
  background: #c0b3b3;
  width: 8px;
  height: 8px;
  z-index: -1;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
