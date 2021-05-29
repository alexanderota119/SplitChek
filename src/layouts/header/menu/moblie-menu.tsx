import React from "react";
import {
  MenuDiv,
  ItemDiv,
  LogoDiv,
  CorssDiv,
  ButtonDiv,
} from "./moblie-menu.style";
import LogoImage from "components/LogoImage/logo-image";
import Logo from "assets/images/layout/header/Logo.svg";
import Corss from "assets/images/layout/header/Corss.svg";
import MenuItem from "components/MenuItem/menu-item";
import AboutImage from "assets/images/layout/header/aboutMenu.png";
import GiftersImage from "assets/images/layout/header/giftersMenu.png";
import BussinessImage from "assets/images/layout/header/businessMenu.png";
import BrowseImage from "assets/images/layout/header/browseMenu.png";
import { Button } from "components/Button/button";

const DesktopMenu: React.FC = () => {
  return (
    <MenuDiv>
      <LogoDiv>
        <CorssDiv>
          <img src={Corss} alt="cross" />
        </CorssDiv>
        <LogoImage imageUrl={Logo} alt="split chek" />
      </LogoDiv>
      <ItemDiv>
        <MenuItem title="About US" image={AboutImage} herf="about" />
        <MenuItem title="For Gifters" image={GiftersImage} herf="gifters" />
        <MenuItem
          title="For Business"
          image={BussinessImage}
          herf="bussiness"
        />
        <MenuItem title="Browes Gifts" image={BrowseImage} herf="browes" />
      </ItemDiv>
      <ButtonDiv>
        <Button size="long" variant="blue">
          Login
        </Button>
        <Button size="big" variant="orange">
          Create account
        </Button>
      </ButtonDiv>
    </MenuDiv>
  );
};

export default DesktopMenu;
