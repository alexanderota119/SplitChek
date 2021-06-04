import React from "react";
import {
  MenuDiv,
  LogoDiv,
  AvatarContainer,
  SearchContainer,
  LogoContainer,
  LanguageContainer,
} from "./moblie-menu.style";
import LogoImage from "components/LogoImage/logo-image";
import logoMobile from "assets/images/layout/header/logo-mobile.svg";
import avatar from "assets/images/layout/header/Ellipse135.png";
import CollapseSeach from "components/CollapseSearchBar";
import AvatarImage from "components/Avatar/";
import MobileDropdown from "components/MobileDropdown";
import { useLocale } from "contexts/location/location.provider";
import SearchInput from "components/SearchInput";

const languageType = [
  {
    id: "en",
    label: "EN",
  },
  {
    id: "de",
    label: "DE",
  },
];
const hadleDropDown = (val) => {};

const MobileMenu: React.FC = () => {
  const { locale, changeLocation } = useLocale();
  const clickHandle = (item) => {
    changeLocation(item.id);
  };
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
        <LanguageContainer>
          <MobileDropdown
            list={languageType}
            click={clickHandle}
            type="mobile"
          ></MobileDropdown>
        </LanguageContainer>
        <SearchContainer>
          <div className="search-tablet">
            <SearchInput />
          </div>
          <div className="search-mobile">
            <CollapseSeach />
          </div>
        </SearchContainer>
        <AvatarContainer>
          <AvatarImage src={avatar}></AvatarImage>
        </AvatarContainer>
      </LogoDiv>
    </MenuDiv>
  );
};

export default MobileMenu;
