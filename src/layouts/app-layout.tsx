import React from "react";
import Header from "./header/header";
import { LayoutWrapper } from "./app-layout.style";
import Footer from "./footer/footer";
import MobileMenu from "./header/menu/moblie-menu";
import MoblieSidebar from "components/Sidebar/Sidebar";
type LayoutProps = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper className={`layoutWrapper`}>
      {/* <MoblieSidebar open={true}>
        <MobileMenu />
      </MoblieSidebar> */}
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
