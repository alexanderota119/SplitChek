import styled from "styled-components";

export const SponsoredCardWrapper = styled.div`
  @media screen and (max-width: 1399px) {
    padding: 0 20px;
    width: 50%;
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
    & .imgSection1 {
      & img {
        width: 25px;
        height: 25px;
      }
    }
    & .imageSection2 {
      & img {
        width: 38px;
        height: 38px;
      }
    }
  }
  h5 {
    margin: 0px;
  }
`;

export const SponsoredProduct = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 14px;
  & img {
    min-width: 101px;
    max-height: 131px;
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
      margin-bottom: 20px;
    }
    & p {
      font-weight: normal;
      font-size: 12px;
      line-height: 15px;
      margin-bottom: 21px;
    }
  }
  & p {
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
  }
`;

export const SponsoredDesciption = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
  margin-bottom: 14px;
`;

export const SponsoredButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  & Button {
    width: 114px;
    height: 26px;
    padding: 6px;
    font-size: 11px;
    margin-right: 4px;
    margin-top: 6px;
  }
`;

export const SponsoredButton = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;
