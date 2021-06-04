import React from "react";
import {
  HeaderWrapper,
  HeaderInner,
  HeaderInnerLogo,
  HeaderContainer,
  LanguageContainer,
} from "./header.style";
import LogoImage from "components/LogoImage/logo-image";
import Logo from "assets/images/layout/header/Logo.svg";
import Container from "components/Container/container";
import SearchInput from "components/SearchInput";
import DesktopMenu from "./menu/menu";
import MobileMenu from "./menu/moblie-menu";
import DropDown from "components/Dropdown";
import { useLocale } from "../../contexts/location/location.provider";

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

const Header: React.FC = () => {
  const { locale, changeLanguage } = useLocale();
  const clickHandle = (item) => {
    // changeLanguage(item.id);
  };
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <div className="desktop">
            <HeaderInner>
              <HeaderInnerLogo>
                <LogoImage imageUrl={Logo} alt="split chek" />
              </HeaderInnerLogo>
              <LanguageContainer>
                <DropDown list={languageType} click={clickHandle}></DropDown>
              </LanguageContainer>
              <SearchInput />
              <DesktopMenu />
            </HeaderInner>
          </div>
          <div className="mobile">
            <MobileMenu />
          </div>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
