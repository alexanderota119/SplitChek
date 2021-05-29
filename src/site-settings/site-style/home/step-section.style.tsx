import styled from "styled-components";

export const StepArea = styled.div`
  text-align: center;

  .split-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 30px;
    padding: 0 0 170px 0;

    &__single {
      text-align: center;

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
    @media screen and (max-width: 768px) {
      padding: 0 0 70px 0;
    }
    @media screen and (max-width: 480px) {
      display: flex;
      flex-direction: column;
      padding: 0 0 35px 0;
      &__single {
        padding: 0 0 55px 0;
        & h4 {
          padding: 30px 20px 13px 20px;
        }
      }
    }
  }
`;
export const CirclePatternView = styled.div`
  display: none;
  z-index: -1;
  @media screen and (max-width: 480px) {
    display: block;
    position: absolute;
    top: -1%;
    right: -25%;
  }
  &img {
    z-index: -1;
  }
`;
export const GradientComponent = styled.div`
  background: linear-gradient(
    220.16deg,
    #fef9f5 6.46%,
    rgba(254, 249, 245, 0) 73.15%
  );
  border-top-right-radius: 200px;
  border-bottom-right-radius: 200px;
  @media screen and (max-width: 768px) {
    border-top-right-radius: 150px;
    border-bottom-right-radius: 150px;
  }
`;

export const StepHeader = styled.h2`
  font-weight: 700;
  font-size: 42px;
  line-height: 130%;
  padding: 70px 0 46px 0;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    padding: 44px 20px 29px 20px;
  }
`;
export const StepText = styled.div`
  padding: 0 250px;
  font-weight: 400;
  & p {
    font-size: 16px;
    line-height: 140%;
    color: #434343;
    &:first-of-type {
      padding-bottom: 25px;
    }
    &:last-of-type {
      padding-bottom: 65px;
    }
  }
  @media screen and (max-width: 1050px) {
    padding: 0 100px;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    & p {
      &:last-of-type {
        padding-bottom: 55px;
      }
    }
  }
`;

export const StepsColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 0 55px 0;
  gap: 60px;

  @media screen and (max-width: 920px) {
    display: flex;
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 480px) {
    padding-bottom: 0px;
    gap: 10px;
  }
`;
export const StepsColumns_Right = styled.div`
  text-align: start;
  align-self: flex-end;
  padding: 0 0 35px 0;

  & h2 {
    font-weight: 700;
    font-size: 42px;
    line-height: 130%;
    padding: 0 0 37px 0;
  }

  & p {
    font-size: 16px;
    line-height: 140%;
    color: #434343;
    padding: 0 0 32px 0;

    & span {
      font-weight: 700;
      font-size: 16px;
      line-height: 140%;
    }
    @media screen and (max-width: 768px) {
      padding: 0 0 20px 0;
    }

    &:nth-of-type(3) {
      padding: 0;
    }
  }
  @media screen and (max-width: 768px) {
    text-align: start;
    align-self: flex-end;
    & h2 {
      text-align: center;
      font-size: 24px;
      padding: 0 0 33px 0;
    }
  }
`;
export const StepsColumns_Left = styled.div``;

export const SectionCircleBg = styled.div`
  height: 418px;
  width: 418px;
  background: #f8f2ec;
  left: -6%;
  bottom: -5%;
  z-index: -1;
  @media screen and (max-width: 960px) {
    height: 370px;
    width: 370px;
    bottom: -40px;
  }
  @media screen and (max-width: 480px) {
    height: 270px;
    width: 270px;
    left: -40%;
    bottom: -40px;
  }
  @media screen and (max-width: 350px) {
    display: none;
  }
`;
export const SectionCircleMd = styled.div`
  height: 30px;
  width: 30px;
  background: #f8f2ec;
  left: 7%;
  top: 191px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const SectionCircleSm = styled.div`
  height: 18px;
  width: 18px;
  background: #e2dcdc;
  left: 39%;
  bottom: 530px;
  @media screen and (max-width: 1060px) {
    display: none;
  }
  @media screen and (max-width: 380px) {
    display: block;
    left: 84px;
    bottom: 760px;
  }
  @media screen and (max-width: 290px) {
    display: none;
  }
`;
export const SectionCircleVerySm = styled.div`
  height: 12px;
  width: 12px;
  background: #d4ccc9;
  right: 39%;
  bottom: 501px;
  @media screen and (max-width: 1060px) {
    display: none;
  }
  @media screen and (max-width: 380px) {
    display: block;
    right: 100px;
    bottom: 740px;
  }
  @media screen and (max-width: 290px) {
    display: none;
  }
`;
export const SectionCircleExtraSm = styled.div`
  left: 14%;
  top: 100px;
  height: 8px;
  width: 8px;
  background: #c0b3b3;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
