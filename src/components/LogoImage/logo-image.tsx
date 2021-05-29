import React from "react";
import Router from "next/router";
import { LogoBox, Logo } from "./logo-image-style";
type LogoProps = {
  imageUrl: string;
  alt: string;
  onClick?: () => void;
  align?: string;
};

const LogoImage: React.FC<LogoProps> = ({
  imageUrl,
  alt,
  onClick,
  align = "center",
}) => {
  function onLogoClick() {
    Router.push("/");
    if (onClick) {
      onClick();
    }
  }
  return (
    <LogoBox onClick={onLogoClick} align={align}>
      <Logo src={imageUrl} alt={alt} />
    </LogoBox>
  );
};

export default LogoImage;
