import React from "react";
import Header from "./header/header";
import {
  LayoutWrapper,
  FooterContainer,
  BodyContainer,
} from "./app-layout.style";
import Footer from "./footer/footer";
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
      <BodyContainer>
        <Header />
        {children}
      </BodyContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </LayoutWrapper>
  );
};

export default Layout;
