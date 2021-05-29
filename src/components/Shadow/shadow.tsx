import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  color?: string;
};
type ShadowProps = {
  shadowText: string;
};
const TempShadow = styled.div<ShadowProps>`
  ${(props) => props.shadowText}
`;
const Shadow: React.FC<Props> = ({ children, color = "red" }) => {
  let shadowText;
  switch (color) {
    case "red":
      shadowText =
        "filter: drop-shadow(0px 21px 24px rgba(255, 114, 113, 0.4))";
      break;
    case "yellow":
      shadowText =
        "filter: drop-shadow(0px 21px 24px rgba(255, 220, 144, 0.4));";
      break;
    case "blue":
      shadowText =
        "filter: drop-shadow(0px 21px 24px rgba(123, 186, 238, 0.4));";
      break;
    case "purple":
      shadowText =
        "filter: drop-shadow(0px 21px 24px rgba(143, 93, 236, 0.4));";
      break;
    case "pink":
      shadowText =
        "filter: drop-shadow(0px 21px 24px rgba(217, 145, 201, 0.4));";
      break;
    default:
      break;
  }

  return <TempShadow shadowText={shadowText}>{children}</TempShadow>;
};

export default Shadow;
