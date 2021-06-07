import styled from "styled-components";

export const SponsoredCardWrapper = styled.div`
  @media screen and (max-width: 1399px) {
    padding: 0 20px;
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SponsoredSectionArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 25px 20px 31px 24px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 25px 50px;
  }
  @media screen and (max-width: 460px) {
    width: 100%;
    padding: 25px 20px 31px;
  }
`;

export const SponsoredHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 18px;
  & .imageGroup {
    margin-right: 24px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    & .imageSection1 {
      z-index: 2;
      & img {
        min-width: 32px;
        height: 32px;
      }
    }
    & .imageSection2 {
      margin-left: -15px;
      z-index: 1;
      & img {
        min-width: 48px;
        height: 48px;
      }
    }
  }
  h5 {
    margin: 0px;
    font-size: 16px;
    font-weight: bold;
    color: #140a01;
  }
`;

export const SponsoredProduct = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 14px;

  & img {
    min-width: 101px;
    height: 131px;
    margin-right: 15px;
    @media screen and (max-width: 768px) {
      margin-right: 2px;
      min-width: 126px;
      height: 126px;
    }
  }
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;

  & .priceCotainer {
    display: flex;
    flex-direction: column;
    & span {
      font-weight: bold;
      font-size: 28px;
      line-height: 34px;
      color: #abb1bb;
      margin-bottom: 14px;
    }
    & p {
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      margin-bottom: 14px;
    }
  }
  & p {
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 0px;
  }
`;

export const SponsoredDesciption = styled.div`
  & p {
    font-weight: normal;
    font-size: 12px;
    line-height: 140%;
    margin-bottom: 12 px;
    color: #434343;
  }
  & a {
    font-weight: normal;
    font-size: 12px;
    line-height: 140%;
    margin-bottom: 12 px;
  }
`;

export const SponsoredButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  & Button {
    width: auto;
    height: 26px;
    padding: 9px;
    font-size: 11px;
    margin-right: 2px;
    margin-top: 2px;
    border-radius: 8px;
  }
`;

export const SponsoredButton = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;
