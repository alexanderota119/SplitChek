import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;

  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  margin-bottom: 31px;
  @media screen and (max-width: 768px) {
    padding: 25px 50px;
  }
  @media screen and (max-width: 460px) {
    padding: 25px 18px 24px 20px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
  & img {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 139px;
    max-height: 139px;
    margin-right: 8px;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ReactionArea = styled.div`
  margin-bottom: 23px;
`;

export const CommentNumberImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
  align-items: center;

  & img {
    min-width: 50px;
    max-height: 22px;
  }
  & p {
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #36558f;
  }
`;

export const PriceContainer = styled.div`
  display:flex;
  flex-direction column;
  justify-content:flex-start;
  display:flex;
  flex: 1;
  & .price {
    & p {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 10px;
      color: #140A01;
    }
  }

  & .sold-by {
    & p {
      font-size: 12px;
      line-height: 15px;
      margin-bottom: 11px;
    }
  }
  & .ships-from{
    & p {
      font-size: 12px;
      line-height: 15px;
      margin-bottom: 11px;
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
  & h5 {
    margin-bottom: 15px;
    color: #140a01;
  }
  & p {
    line-height: 140%;
    margin-bottom: 0px;
  }
`;

export const TagGroupContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  & Button {
    height: 26px;
    padding: 9px;
    font-size: 11px;
    margin-right: 2px;
    margin-top: 2px;
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
  display: flex;
  justify-content: space-between;
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
