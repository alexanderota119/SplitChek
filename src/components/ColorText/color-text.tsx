import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

type Props = {
  children: React.ReactNode;
  color?: string;
  rest?: string;
};
type TextProps = {
  colorData: string;
  rest: string;
};
const TempText = styled.span<TextProps>`
  color: ${(props) => themeGet(`colors.${props.colorData}`)};
  ${(props) => props.rest}
`;

const ColorText: React.FC<Props> = ({
  children,
  color = "orange.regular",
  rest,
}) => {
  return (
    <TempText colorData={color} rest={rest}>
      {children}
    </TempText>
  );
};

export default ColorText;
