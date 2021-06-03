import React from "react";
import { FooterWrapper, FooterInner, DotInner } from "./footer.style";
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
const ITEM_HEIGHT = 48;
const Footer: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <FooterWrapper>
      <FooterInner>
        <HeaderIcon noneSrc={home} activeSrc={activeHome}></HeaderIcon>
        <HeaderIcon noneSrc={star} activeSrc={starActive}></HeaderIcon>
        <HeaderIcon noneSrc={tip} activeSrc={tipActive}></HeaderIcon>
        <HeaderIcon noneSrc={store} activeSrc={storeActive}></HeaderIcon>
        <DotInner>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <BsThreeDots color="#36558F"></BsThreeDots>
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            <MenuItem onClick={handleClose}>USD</MenuItem>
            <MenuItem onClick={handleClose}>EN</MenuItem>
          </Menu>
        </DotInner>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
