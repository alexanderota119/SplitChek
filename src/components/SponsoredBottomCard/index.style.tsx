import styled from "styled-components";

export const CardWrapper = styled.div`
  margin-bottom: 20px;
  margin-right: 30px;
  @media screen and (max-width: 1399px) {
    padding: 0 20px;
    margin-right: 0px;
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 15px;
    margin-right: 0px;
    margin-left: 0px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 26px 15px;
  display: flex;
  flex-direction: column;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
`;

export const ImageContainer = styled.div`
  min-width: 103px;
  min-height: 107px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 103px;
    height: 107px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  & h5 {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #140a01;
    margin-bottom: 15px;
  }

  & p {
    font-weight: bold !important;
    font-size: 30px !important;
    line-height: 37px;
    color: #140a01;
    margin-bottom: 14px;
  }

  & span {
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #7a8698;
  }
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 25px;
  & p {
    font-size: 12px;
    line-height: 140%;
    color: #434343;
    margin-bottom: 0px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & Button {
    font-size: 18px;
    width: 139.5px;
    height: 43px;
    padding: 9px;
  }
`;

export const BadgeContainer = styled.div`
  & .imageGroup {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    & .imgSection1 {
      & img {
        min-width: 25px;
        height: 25px;
      }
    }
    & .imageSection2 {
      & img {
        min-width: 38px;
        height: 38px;
      }
    }
  }
`;
