import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const LayoutWrapper = styled.div`
  background-color: ${themeGet("colors.body.bg", "#E5E5E5")};
  position: relative;
  @media (max-width: 990px) {
    background-color: ${themeGet("colors.white", "#ffffff")};
  }
`;

export const BodyContainer = styled.div`
  height: calc(100vh - 60px);
`;

export const FooterContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0px;
    display: block;
    z-index: 100;
  }
`;
