import React from "react";
import {
  HeaderWrapper,
  HeaderInner,
  HeaderInnerBurger,
  HeaderInnerLogo,
} from "./header.style";
import LogoImage from "components/LogoImage/logo-image";
import Buger from "components/Burger/burger";
import Logo from "assets/images/layout/header/Logo.svg";
import Container from "components/Container/container";
import { Button } from "components/Button/button";
import DesktopMenu from "./menu/menu";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderInner>
          <HeaderInnerBurger>
            <Buger />
          </HeaderInnerBurger>
          <HeaderInnerLogo>
            <LogoImage imageUrl={Logo} alt="split chek" />
          </HeaderInnerLogo>
          <DesktopMenu />
          <Button variant="blue" size="small">
            Log In
          </Button>
        </HeaderInner>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
