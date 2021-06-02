import React from "react";
import {
  HeaderWrapper,
  HeaderInner,
  HeaderInnerLogo,
  HeaderContainer,
} from "./header.style";
import LogoImage from "components/LogoImage/logo-image";
import Logo from "assets/images/layout/header/Logo.svg";
import Container from "components/Container/container";
import SearchInput from "components/SearchInput";
import DesktopMenu from "./menu/menu";
import MobileMenu from "./menu/moblie-menu";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
          <div className="desktop">
            <HeaderInner>
              <HeaderInnerLogo>
                <LogoImage imageUrl={Logo} alt="split chek" />
              </HeaderInnerLogo>
              <p
                style={{
                  color: "#36558F",
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginLeft: "18px",
                }}
              >
                EN
              </p>
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
