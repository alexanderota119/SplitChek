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
  width: 94px;
  height: 54px;
  position: relative;
  display: flex;
  justify-content: flex-end;

  img {
    border-radius: 50%;
    transition: transform 0.2s ease-in;
  }
`;
const Avatar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 100;
  &:hover {
    z-index: 101;
  }

  img.avatar {
    position: absolute;
    right: 0;
    top: 3px;
    width: 48px;
    height: 48px;

    &:hover {
      border: 2px solid white;
      transform: scale(1.125);
    }
  }
`;
const JsBadge = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 99;
  &:hover {
    z-index: 101;
  }

  img.badge-avatar {
    position: absolute;
    right: 40px;
    top: 7px;
    width: 40px;
    height: 40px;

    &:hover {
      border: 2px solid white;
      transform: scale(1.2);
    }
  }
`;

const AvatarImage: React.FC<Props> = ({ src }) => {
  return (
    <AvatarArea>
      <JsBadge>
        <img className="badge-avatar" src={badge} alt="js-badge" />
      </JsBadge>
      <Avatar>
        <img className="avatar" src={src} alt="avatar" />
      </Avatar>
    </AvatarArea>
  );
};

export default AvatarImage;
