import React from "react";
import { MenuNav } from "./menu.style";
import AvatarImage from "components/Avatar/";
import LinkItem from "components/LinkItem/link-item";

import home from "assets/images/layout/header/home.svg";
import store from "assets/images/layout/header/store.svg";
import tip from "assets/images/layout/header/tip.svg";
import Ellipse from "assets/images/layout/header/Ellipse135.png";

const DesktopMenu: React.FC = () => {
  return (
    <MenuNav>
      <nav className="header-nav">
        <ul>
          <li>
            <LinkItem href="/">
              <img
                src={home}
                alt=""
                style={{ maxWidth: "26px", maxHeight: "25px" }}
              />
            </LinkItem>
          </li>

          <li>
            <LinkItem href="/">
              <img
                src={tip}
                alt=""
                style={{ maxWidth: "26px", maxHeight: "25px" }}
              />
            </LinkItem>
          </li>
          <li>
            <LinkItem href="/">
              <img
                src={store}
                alt=""
                style={{ maxWidth: "26px", maxHeight: "25px" }}
              />
            </LinkItem>
          </li>
          <li>
            <p
              style={{
                color: "#36558F",
                fontSize: "14px",
                fontWeight: "bold",
                marginRight: "18px",
              }}
            >
              USD
            </p>
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
