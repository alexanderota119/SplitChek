import styled from "styled-components";

export const BrowerGiftsContainer = styled.div`
  padding-top: 44px;
  position: relative;
  & .desktop {
    display: block;
  }
  & .mobile {
    display: none;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: #434343;
  }
  @media screen and (max-width: 768px) {
    padding-top: 0px;
    & .desktop {
      display: none;
    }
    & .mobile {
      display: block;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.4;
      color: #434343;
    }
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  width: 100%;
  @media screen and (max-width: 1399px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ProductSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 42px;
  width: calc(100% - 362px);

  @media screen and (max-width: 1399px) {
    width: 100%;
  }
`;

export const SponsoredBottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
