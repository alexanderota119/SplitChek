import styled from "styled-components";

export const CardContainer = styled.div`
  width: 381px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 23px 28px 27px;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  margin-bottom: 5px;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 107px;
  margin-bottom: 25px;
`;

export const ImageContainer = styled.div`
  min-width: 103px;
  min-height: 107px;

  & img {
    width: 103px;
    height: 107px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & span {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #140a01;
  }
  & p {
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    color: #140a01;
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
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & Button {
    width: 139.5px;
    height: 43px;
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
`;
