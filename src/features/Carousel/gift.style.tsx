import styled from "styled-components";

export const GiftSection = styled.div`
  padding: 100px 0 0 100px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 480px) {
    padding: 65px 0 0 0;
    width: 100%;
  }
`;
export const CarouselsCell = styled.div`
  opacity: 1 !important;
  margin: 0 20px 0 0;
  width: 25%;
  @media screen and (max-width: 1200px) {
    width: 30%;
    margin: 0 10px 0 0;
  }
  @media screen and (max-width: 992px) {
    width: 50%;
    margin: 0 10px 0 0;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    margin: 0 10px 0 0;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    margin: 0 10px 0 0;
  }
  @media screen and (max-width: 480px) {
    width: 95%;
    margin: 0 10px 0 0;
  }
`;
export const GiftSlide = styled.div`
  & img {
    width: 100%;
  }
`;
