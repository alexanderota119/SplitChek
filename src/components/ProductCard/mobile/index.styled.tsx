import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  padding: 25px 20px 24px 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  & img {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 139px;
    min-height: 139px;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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

export const PriceContainer = styled.div`
  display:flex;
  flex-direction row;
  & p {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  & span {
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 11px;
  }
  & .ships-from {
    & span {
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  & h5 {
    margin-bottom: 15px;
  }
  & p {
    font-size: 14px;
    font-weight: 400px;
  }
`;
