import React from "react";
import { MenuNav } from "./menu.style";
import LinkItem from "components/LinkItem/link-item";
const DesktopMenu: React.FC = () => {
  return (
    <MenuNav>
      <nav className="header-nav">
        <ul>
          <li>
            <LinkItem href="/about">About Us</LinkItem>
          </li>
          <li>
            <LinkItem href="/gifts">For Gifters</LinkItem>
          </li>
          <li>
            <LinkItem href="/business">For Business</LinkItem>
          </li>
          <li>
            <LinkItem href="/browse">Browse Gifts</LinkItem>
          </li>
        </ul>
      </nav>
    </MenuNav>
  );
};

export default DesktopMenu;
