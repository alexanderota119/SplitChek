import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

type Props = {
  children: React.ReactNode;
  color?: string;
  rest?: string;
};
type TextProps = {
  color: string;
  rest: string;
};
// const TempText = styled.span<TextProps>`
//   color: ${themeGet(`colors.${(props) => props.color}`)};
//   ${(props) => props.rest}
// `;

const ColorText: React.FC<Props> = ({
  children,
  color = "orange.regular",
  rest,
}) => {
  const TempText = styled.span`
    color: ${themeGet(`colors.${color}`)};
    ${rest}
  `;
  return <TempText>{children}</TempText>;
};

export default ColorText;
