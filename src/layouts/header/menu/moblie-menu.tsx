import React from "react";
import { MenuDiv, LogoDiv } from "./moblie-menu.style";
import LogoImage from "components/LogoImage/logo-image";
import logoMobile from "assets/images/layout/header/logo-mobile.svg";

const MobileMenu: React.FC = () => {
  return (
    <MenuDiv>
      <LogoImage
        imageUrl={logoMobile}
        alt="logo mobile"
        align="left"
      ></LogoImage>
    </MenuDiv>
  );
};

export default MobileMenu;
