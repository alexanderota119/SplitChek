import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 33px;

  @media screen and (max-width: 768px) {
    padding: 20px 50px;
  }
  @media screen and (max-width: 460px) {
    padding: 20px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RcdImageContainer = styled.div`
  position: relative;
  width: 100%px;
  margin-bottom: 22px;

  & img {
    width: 100%;
  }
  .img-desc {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;

    h3 {
      font-size: 48px;
      line-height: 59px;
      font-weight: 800;
      color: white !important;
      margin-bottom: 0px;
    }
    p {
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 16px;
      color: white;
    }
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 11px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  & .price {
    & h5 {
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 16px;
      color: #140a01;
    }
  }
  & p {
    font-size: 12px;
    margin-bottom: 0px;
  }
`;
export const ReactArea = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

export const CommentNumberImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
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
export const CommentText = styled.div`
  justify-content: flex-end;
  display: flex;
  color: #7a8698;
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 38px;
  & p {
    font-size: 14px;
    line-height: 140%;
    margin-bottom: 0px;
  }
`;

export const FooterConainer = styled.div`
  display: flex;
  flex-diection: row;
  flex: 1;
`;
export const MoreOfferContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  & img {
    min-width: 14px;
    height: 7px;
  }
  & span {
    color: #36558f;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-decoration-line: underline;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  & Button {
    width: 155px;
    height: 42px;
    padding: 9px;
  }
`;
