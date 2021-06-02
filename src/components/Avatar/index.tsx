import React from "react";
import styled from "styled-components";
import badge from "assets/images/layout/header/JS.svg";

type Props = {
  src?: string;
};
type TextProps = {
  color: string;
  rest: string;
};
// const TempText = styled.span<TextProps>`
//   color: ${themeGet(`colors.${(props) => props.color}`)};
//   ${(props) => props.rest}
// `;
const AvatarArea = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  & img {
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
const JsBadge = styled.div`
  position: absolute;
  top: 10px;
  left: -30px;
  & img {
    width: 40px;
    height: 40px;
  }
`;

const AvatarImage: React.FC<Props> = ({ src }) => {
  return (
    <AvatarArea>
      <img src={src} />
      <JsBadge>
        <img src={badge} />
      </JsBadge>
    </AvatarArea>
  );
};

export default AvatarImage;
