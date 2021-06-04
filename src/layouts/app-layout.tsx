import React, { useState } from "react";
import Header from "./header/header";
import {
  LayoutWrapper,
  FooterContainer,
  BodyContainer,
} from "./app-layout.style";
import Footer from "./footer/footer";

import MobileSidebar from "components/Sidebar/Sidebar";
import SideBarMenu from "components/SideBarMenu";
import OverLay from "./overlay";

type LayoutProps = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

//! set the data
const item = {};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const onMenuClick = () => {
    setOpen(true);
  };

  const onOverLayClick = () => {
    setOpen(false);
  };
  return (
    <LayoutWrapper>
      <MobileSidebar open={open}>
        <SideBarMenu onClose={onOverLayClick}></SideBarMenu>
      </MobileSidebar>
      <BodyContainer>
        <Header />
        {children}
      </BodyContainer>
      <FooterContainer>
        <Footer onMenuClick={onMenuClick} />
      </FooterContainer>
      {open && <OverLay handleSide={onOverLayClick} />}
    </LayoutWrapper>
  );
};

export default Layout;
