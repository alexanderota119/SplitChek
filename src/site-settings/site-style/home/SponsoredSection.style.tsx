import styled from "styled-components";

export const SponsoredSectionArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 320px;

  @media screen and (max-width: 1399px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    padding-top: 25px;
    margin-bottom: 44px;
  }

  & h3 {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #4ecdc4;
    margin-bottom: 0px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  @media screen and (max-width: 1399px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    margin-left: -20px;
    margin-right: -20px;
  }
`;

export const CircleContainer = styled.div`
  position: absolute;
  top: 1920px;
  right: 30px;
  z-index: -1;
  @media screen and (max-width: 1399px) {
    top: 850px;
  }
  @media screen and (max-width: 1084px) {
    top: 900px;
  }
  @media screen and (max-width: 864px) {
    top: 950px;
  }
`;
