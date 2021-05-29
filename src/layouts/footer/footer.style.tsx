import styled, { keyframes } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import FooterBackground from "../../assets/images/layout/footer/footer.jpg";
import FooterBackgroundBusiness from "../../assets/images/layout/footer/footer-business.jpg";

export const FooterWrapper = styled.header`
  h5 {
    font-weight: 700;
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }
  background: url(${FooterBackground});
  background-position: center bottom;
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    background-position: right bottom;
  }
  z-index: -2;
  .footer-business {
    background: url(${FooterBackgroundBusiness});
    background-size: cover;
    background-position: center center;
  }
`;
export const FooterInner = styled.div`
  padding: 50px 0 160px 0;
  display: grid;
  grid-template-columns: 30% 70%;
  @media screen and (max-width: 990px) {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
  }
`;
export const LogoDiv = styled.div`
  padding: 5px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const FooterCopyRight = styled.div`
  padding: 17px 0 0 0;
  font-size: 14px;
  line-height: 17px;
`;
export const FooterTitle = styled.div`
  padding: 0 0 33px 0;
  @media screen and (max-width: 768px) {
    font-s
    text-align: left;
  }
`;
export const FooterNavColoumn = styled.div`
  &:last-of-type {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    grid-template-rows: auto auto;
    & ul {
      grid-row: 2 / 2;
    }
    @media screen and (max-width: 768px) {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      & li {
        text-align: left;
      }
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 69px;
  }
  & ul {
    & li {
      padding: 0 0 25px 0;
      font-size: 14px;
      line-height: 17px;
    }
  }
`;
export const FooterInnerNav = styled.div`
  display: grid;
  grid-template-columns: 175px 175px auto;
  column-gap: 30px;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    & li {
      text-align: left;
    }
  }
`;
