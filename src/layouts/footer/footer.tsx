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

const Footer = ({ onMenuClick }) => {
  //! financial

  const financialhandleClick = (val) => {};

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
            onClick={onMenuClick}
          >
            <BsThreeDots color="#36558F"></BsThreeDots>
          </IconButton>
        </DotInner>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
