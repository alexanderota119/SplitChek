import styled from "styled-components";

export const StyleCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 30px;
  padding: 0 0 170px 0;

  @media screen and (max-width: 768px) {
    padding: 0 0 70px 0;
  }
  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    padding: 0 0 35px 0;
  }
`;
export const CardSingle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & h4 {
      font-weight: 700;
      font-size: 18px;
      line-height: 140%;
      color: #140a01;
      padding: 30px 0 13px 0;
    }

    & p {
      font-size: 14px;
      line-height: 140%;
      color: #8f8f8f;
    }
  }
 @media screen and (max-width: 640px) {
      padding: 0 0 65px 0;
      & h4 {
        padding: 30px 20px 13px 20px;
      }
      & p { max-width: 278px;}
  }
`;
