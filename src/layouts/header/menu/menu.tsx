import React from "react";
import { MenuNav } from "./menu.style";
import AvatarImage from "components/Avatar/";
import LinkItem from "components/LinkItem/link-item";
import HeaderIcon from "components/HeaderIcon";

import home from "assets/images/layout/header/home.svg";
import activeHome from "assets/images/layout/header/activeHome.svg";

import tip from "assets/images/layout/header/tip.svg";
import tipActive from "assets/images/layout/header/tipActive.svg";

import store from "assets/images/layout/header/store.svg";
import storeActive from "assets/images/layout/header/storeActive.svg";

import Ellipse from "assets/images/layout/header/Ellipse135.png";

import Dropdown from "components/Dropdown/";

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

const DesktopMenu: React.FC = () => {
  const priceHandle = (val) => {};
  return (
    <MenuNav>
      <nav className="header-nav">
        <ul>
          <li>
            <LinkItem href="/">
              <HeaderIcon noneSrc={home} activeSrc={activeHome}></HeaderIcon>
            </LinkItem>
          </li>

          <li>
            <LinkItem href="/">
              <HeaderIcon noneSrc={tip} activeSrc={tipActive}></HeaderIcon>
            </LinkItem>
          </li>
          <li>
            <LinkItem href="/">
              <HeaderIcon noneSrc={store} activeSrc={storeActive}></HeaderIcon>
            </LinkItem>
          </li>
          <li>
            <div
              style={{
                color: "#36558F",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              <Dropdown list={pricetype} click={priceHandle} />
            </div>
          </li>
          <li>
            <AvatarImage src={Ellipse}></AvatarImage>
          </li>
        </ul>
      </nav>
    </MenuNav>
  );
};

export default DesktopMenu;
