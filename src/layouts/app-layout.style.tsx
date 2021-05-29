import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const LayoutWrapper = styled.div`
  background-color: ${themeGet("colors.body.bg", "#E5E5E5")};
  @media (max-width: 990px) {
    background-color: ${themeGet("colors.white", "#ffffff")};
  }
`;
