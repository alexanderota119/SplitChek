import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 824px;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 33px;
  justify-content: space-between;
  padding: 29px 30px;
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
`;

export const ImageProduct = styled.div`
  position: relative;
  min-width: 255px;
  height: 142px;
  margin-bottom: 15px;

  & img {
    max-width: 255px;
    height: 142px;
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
    }
    p {
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 16px;
      color: white;
      margin-bottom: 0px;
    }
  }
`;

export const MoreOfferContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  & img {
    min-width: 14px;
    height: 7px;
  }
  & span {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-decoration-line: underline;
    color: #36558f;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 72px;

  h5 {
    margin-bottom: 20px;
    color: #140a01;
    font-weight: bold;
  }

  .product-description {
    margin-bottom: 16px;
  }
  .product-discounts {
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
  & p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
  }
`;
