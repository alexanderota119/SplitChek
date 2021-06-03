import React from "react";
import {
  MenuDiv,
  LogoDiv,
  AvatarContainer,
  SearchContainer,
  LogoContainer,
} from "./moblie-menu.style";
import LogoImage from "components/LogoImage/logo-image";
import logoMobile from "assets/images/layout/header/logo-mobile.svg";
import avatar from "assets/images/layout/header/Ellipse135.png";
import SearchInput from "components/SearchInput";
import AvatarImage from "components/Avatar/";

const MobileMenu: React.FC = () => {
  return (
    <MenuDiv>
      <LogoDiv>
        <LogoContainer>
          <LogoImage
            imageUrl={logoMobile}
            alt="logo mobile"
            align="left"
          ></LogoImage>
        </LogoContainer>

        <SearchContainer>
          <SearchInput />
        </SearchContainer>
        <AvatarContainer>
          <AvatarImage src={avatar}></AvatarImage>
        </AvatarContainer>
      </LogoDiv>
    </MenuDiv>
  );
};

export default MobileMenu;
