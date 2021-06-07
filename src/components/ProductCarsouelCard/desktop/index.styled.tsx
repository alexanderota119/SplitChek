import styled from "styled-components";

export const ProductCarsouelCardArea = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px 26px;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 33px;
  margin-bottom: 30px;
  @media screen and (max-width: 1399px) {
    width: 100%;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2vw;
  @media screen and (max-width: 1399px) {
    width: 100%;
  }
`;

export const ProductionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 19px;
`;

export const CarsouelContainer = styled.div`
  width: 228px;
  height: 126px;
  & .imgArea {
    min-width: 228px;
    min-height: 126px;
    & img {
      min-width: 228px;
      min-height: 126px;
    }
  }
  margin-right: 19px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionHeader = styled.div`
  & h5 {
    margin-bottom: 19px;
    color: #140a01;
    font-weight: bold;
  }
`;

export const DescriptionBody = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  & p {
    margin-bottom: 0px;
  }
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-right: 50px;
  & .imgSection1 {
    z-index: 2;
    & img {
      min-width: 32px;
      height: 32px;
    }
  }
  & .imageSection2 {
    z-index: 1;
    margin-left: -15px;
    & img {
      min-width: 48px;
      height: 48px;
    }
  }
`;

export const ProductPropertyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TagContainer = styled.div`
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

export const SoldByContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 21px;
`;

export const FooterBody = styled.div`
  margin-right: 9.5px;
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

  & p {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold !important;
    font-size: 20px !important;
    line-height: 24px;
    text-transform: uppercase;
    color: #140a01;
    margin-bottom: 31px;
  }
`;
