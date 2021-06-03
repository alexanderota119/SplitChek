import styled, { keyframes } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const FooterWrapper = styled.header`
  width: 100%;
  height: 60px;
  padding: 17px 5%;
  background: #ffffff;
  box-shadow: 0px -2px 20px rgba(0, 0, 0, 0.1);
`;
export const FooterInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & img {
    width: 26px;
    height: 25px;
  }
`;

export const DotInner = styled.div`
  display: flex;
  align-items: center;
`;
