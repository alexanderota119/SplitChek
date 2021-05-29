import styled from "styled-components";

export const CtaBArea = styled.div`
  @media screen and (max-width: 992px) {
    .container {
      padding: 0;
    }
  }
`;
export const PeopleImageStyle = styled.div`
  padding: 70px 0 30px 0;
  @media screen and (max-width: 768px) {
    padding: 110px 0 35px 0;
  }
`;
export const CtaCotainer = styled.div`
  background: linear-gradient(
    203.96deg,
    #fff7f5 17.12%,
    rgba(254, 249, 245, 0) 70.4%
  );
  border-top-left-radius: 146px;
  border-top-right-radius: 146px;
  text-align: center;
  position: relative;

  & h4 {
    padding: 0 200px 45px 200px;
    font-size: 24px;
    line-height: 140%;
    color: #8f8f8f;

    & span {
      font-weight: 700;
      line-height: 140%;
    }
  }
  & button {
    margin: 0 0 150px 0;
  }
  @media screen and (max-width: 768px) {
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    & h4 {
      padding: 0 20px 45px 20px;
      & span {
        &:first-of-type {
        }
      }
    }
    & button {
      padding: 19px 13px;
      margin: 0 0 100px 0;
    }
  }
`;
export const CtaButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export const CtaPattern = styled.div`
  position: absolute;
  top: -12%;
  right: 0;
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
export const CircleBg = styled.div`
  height: 30px;
  width: 30px;
  top: 137px;
  left: 10%;
  background: #fdbda1;
  @media screen and (max-width: 420px) {
    z-index: 1;
    top: 140px;
    left: 32px;
  }
`;
export const CircleMd = styled.div`
  height: 10px;
  width: 10px;
  top: 65px;
  left: 29%;
  background: #dad5c6;
  @media screen and (max-width: 420px) {
    z-index: 1;
    top: 87px;
    left: auto;
    right: 64px;
  }
`;
