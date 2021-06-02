import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { themeGet } from "@styled-system/theme-get";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
  type?: string;
  href: string;
};
const SplictCheck = styled.span`
  &.active {
    font-weight: ${themeGet("fontWeights.bold", "700")};
  }
  cursor: pointer;
  font-weight: ${themeGet("fontWeights.medium", "500")};
  font-size: ${themeGet("fontSizes.base", "14")}px;
  color: ${themeGet("colors.black.100", "#140a01")};
  :hover {
    transition: all 0.3s ease;
    color: ${themeGet("colors.orange.regular", "#F77D0E")};
  }
  @media screen and (max-width: 768px) {
    font-size: ${themeGet("fontSizes.mm", "18")}px;
  }
  & img {
    width: 26px;
    height: 25px;
  }
`;
const BussinessCheck = styled.span`
  &.active {
    font-weight: ${themeGet("fontWeights.bold", "700")};
  }
  cursor: pointer;
  font-weight: ${themeGet("fontWeights.medium", "500")};
  font-size: ${themeGet("fontSizes.base", "14")}px;
  color: ${themeGet("colors.black.100", "#140a01")};
  :hover {
    transition: all 0.3s ease;
    color: ${themeGet("colors.blue.regular", "#36558F")};
  }
  @media screen and (max-width: 768px) {
    font-size: ${themeGet("fontSizes.mm", "18")}px;
  }
`;
const LinkItem: React.FC<Props> = ({ children, type = "splitChek", href }) => {
  const Theme = type == "splitChek" ? SplictCheck : BussinessCheck;
  const router = useRouter();
  const { pathname } = router;
  const active = pathname == href ? "active" : "";
  return (
    <Link href={href}>
      <Theme className={active}>{children}</Theme>
    </Link>
  );
};

export default LinkItem;
