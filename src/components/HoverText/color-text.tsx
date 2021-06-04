import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

type Props = {
  children: React.ReactNode;
  color?: string;
  rest?: string;
  hoverColor?: string;
};
type TextProps = {
  colorData: string;
  rest: string;
  hoverColor: string;
};
const TempText = styled.span<TextProps>`
  color: ${(props) => props.colorData};
  ${(props) => props.rest}
  :hover {
    color: ${(props) => props.hoverColor};
  }
`;

const HoverText: React.FC<Props> = ({
  children,
  color = "orange.regular",
  rest,
  hoverColor,
}) => {
  return (
    <TempText colorData={color} rest={rest} hoverColor={hoverColor}>
      {children}
    </TempText>
  );
};

export default HoverText;
