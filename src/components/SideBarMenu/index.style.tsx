import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 26px;
  padding-right: 33px;
  padding-left: 10px;
`;

export const MenuHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;

  h3 {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #140a01;
    marign-bottom: 0px;
  }

  & img {
    min-width: 18px;
    height: 18px;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 26px;
`;

export const IntroductionContainer = styled.div`
  padding-top: 25px;
  background: #ffffff;
  border: 1px solid #d9e0ea;
  box-sizing: border-box;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 19px;
`;

export const CircleContainer = styled.div`
  position: relative;
  background: lightblue;
  border-radius: 50%;
  width: 24vw;
  height: 24vw;
  margin-bottom: 11px;
  & p {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
    color: #abb1bb;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  & p {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #140a01;
  }
`;

export const WishListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e2e7ee;
`;

export const PreferencesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e2e7ee;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 31px;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  & h3 {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #140a01;
    margin-bottom: 21px;
  }
`;

export const LinkMenuContainer = styled.div`
  & ul {
    margin-bottom: 0px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    & li {
      margin-bottom: 15px;
    }
  }
`;
