import React from "react";
import {
  FooterWrapper,
  FooterInner,
  DotInner,
  MenuItemContainer,
  FinancialInner,
  FinancialHeader,
} from "./footer.style";
import HeaderIcon from "components/HeaderIcon";

import star from "assets/images/layout/header/star.svg";
import starActive from "assets/images/layout/header/starActive.svg";

import home from "assets/images/layout/header/home.svg";
import activeHome from "assets/images/layout/header/activeHome.svg";

import tip from "assets/images/layout/header/tip.svg";
import tipActive from "assets/images/layout/header/tipActive.svg";

import store from "assets/images/layout/header/store.svg";
import storeActive from "assets/images/layout/header/storeActive.svg";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";

import { BsThreeDots } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import Dropdown from "components/Dropdown";

const pricetype = [
  {
    id: "USD",
    label: "USD",
  },
  {
    id: "EUR",
    label: "EUR",
  },
];

const ITEM_HEIGHT = 48;
const Footer: React.FC = () => {
  //! dot
  const [dotanchorEl, setdotAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const dotopen = Boolean(dotanchorEl);

  const dothandleClick = (event: React.MouseEvent<HTMLElement>) => {
    setdotAnchorEl(event.currentTarget);
  };

  const dothandleClose = () => {
    setdotAnchorEl(null);
  };

  //! financial

  const financialhandleClick = () => {};

  return (
    <FooterWrapper>
      <FooterInner>
        <HeaderIcon noneSrc={home} activeSrc={activeHome}></HeaderIcon>
        <HeaderIcon noneSrc={tip} activeSrc={tipActive}></HeaderIcon>
        <HeaderIcon noneSrc={store} activeSrc={storeActive}></HeaderIcon>
        <FinancialInner>
          <Dropdown
            list={pricetype}
            click={financialhandleClick}
            type="mobile"
          ></Dropdown>
        </FinancialInner>
        <DotInner>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={dothandleClick}
          >
            <BsThreeDots color="#36558F"></BsThreeDots>
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={dotanchorEl}
            keepMounted
            open={dotopen}
            onClose={dothandleClick}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            <MenuItem onClick={dothandleClose}>
              <MenuItemContainer>
                <HeaderIcon noneSrc={star} activeSrc={starActive}></HeaderIcon>
              </MenuItemContainer>
            </MenuItem>
          </Menu>
        </DotInner>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
