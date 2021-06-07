import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 33px;
  justify-content: space-between;
  padding: 23px 29px 28px 31px;
  margin-bottom: 30px;
  @media screen and (max-width: 1399px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 24px;
  & .imageProduct {
    & img {
      min-width: 97px;
      max-height: 97px;
    }
  }
  & .imageGroup {
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
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 44px;
`;

export const DescriptionHeader = styled.div`
  & h5 {
    margin-bottom: 18px;
    font-weight: bold;
    color: #140a01;
  }
`;

export const DescriptionBody = styled.div`
  margin-bottom: 18px;
  & p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    margin-bottom: 0px;
  }
`;

export const DescriptionButtons = styled.div`
  margin-bottom: 14px;
  display: flex;
  flex-wrap: wrap;
  & Button {
    width: 114px;
    height: 26px;
    font-size: 11px;
    margin-right: 2px;
    margin-top: 2px;
    border-radius: 8px;
    font-weight: bold;
  }
`;

export const DescriptionFooter = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FooterBody = styled.div`
  margin-right: 19px;
  & p {
    font-family: Montserrat;
    font-style: normal;
    font-size: 14px;
    line-height: 17px;
    color: #434343;
    margin-bottom: 0px;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CommentNumberImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;

  & img {
    width: 50px;
    height: 22px;
  }
  & p {
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #36558f;
    margin-left: 6px;
  }
`;

export const CommentImageArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentText = styled.div`
  text-align: right;
  margin-top: 4px;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #7a8698;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  & .downPriceContainer {
    & .downPrice {
      display: flex;
      flex-direction: row;
      margin-bottom: 3px;
      justify-content: center;
      align-items: center;

      & p {
        font-weight: 500;
        font-size: 12px !important;
        line-height: 15px !important;
        color: #4ecdc4;
        margin-bottom: 0px;
        margin-right: 6px;
      }
      & span {
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        text-decoration-line: line-through;
        color: #abb1bb;
      }
    }
    & span {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
      color: #140a01;
    }
  }

  & p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold !important;
    font-size: 20px !important;
    line-height: 24px;
    text-transform: uppercase;
    color: #140a01;
    margin-bottom: 0px;
  }
`;
