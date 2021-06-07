import styled from "styled-components";

export const SponsoredSectionArea = styled.div`
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
