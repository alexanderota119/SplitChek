import React from "react";
import {
  FooterWrapper,
  FooterInner,
  FooterCopyRight,
  FooterInnerNav,
  FooterTitle,
  FooterNavColoumn,
  LogoDiv,
} from "./footer.style";
import LinkItem from "components/LinkItem/link-item";
import Container from "components/Container/container";
import LogoImage from "components/LogoImage/logo-image";
import FooterLogo from "assets/images/layout/footer/footer-logo.png";
const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterInner>
          <LogoDiv>
            <LogoImage
              imageUrl={FooterLogo}
              alt={"footer-logo"}
              align={"left"}
            />
            <FooterCopyRight>
              All rights reserved. SplttChek 2021
            </FooterCopyRight>
          </LogoDiv>
          <FooterInnerNav>
            <FooterNavColoumn>
              <FooterTitle>
                <h5>General Policy</h5>
              </FooterTitle>
              <ul>
                <li>
                  <LinkItem href="#">Your Agreement</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">Privacy</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">Copyright</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">Cookies</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">Payment</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">Code of Conduct</LinkItem>
                </li>
              </ul>
            </FooterNavColoumn>
            <FooterNavColoumn>
              <FooterTitle>
                <h5>Business Policy</h5>
              </FooterTitle>
              <ul>
                <li>
                  <LinkItem href="#">Selling Terms</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">Payment Terms</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">Advertising</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">Community Engagement</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">Targeting Guidelines</LinkItem>
                </li>
              </ul>
            </FooterNavColoumn>
            <FooterNavColoumn>
              <FooterTitle>
                <h5>More Information</h5>
              </FooterTitle>
              <ul>
                <li>
                  <LinkItem href="#">About Us</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">Shop</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">What’s the goss</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">Sell Something</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">How it works</LinkItem>
                </li>
              </ul>
              <ul>
                <li>
                  <LinkItem href="#">Snatch a bargain</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">My account</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">Contact Us</LinkItem>
                </li>
                <li>
                  <LinkItem href="#">Advertise</LinkItem>
                </li>
              </ul>
            </FooterNavColoumn>
          </FooterInnerNav>
        </FooterInner>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
