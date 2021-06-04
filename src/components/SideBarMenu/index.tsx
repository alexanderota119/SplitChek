import {
  MenuContainer,
  MenuHeaderContainer,
  BodyContainer,
  IntroductionContainer,
  CircleContainer,
  NameContainer,
  WishListContainer,
  PreferencesContainer,
  ButtonContainer,
  LinkContainer,
  LinkMenuContainer,
} from "./index.style";
import Cross from "assets/images/layout/header/Corss.svg";
import HoverText from "components/HoverText/color-text";
import ColorText from "components/ColorText/color-text";
import { Button } from "components/Button/button";
import { FormattedMessage, useIntl } from "react-intl";

//! import images
import alertHover from "assets/images/layout/header/alertHover.svg";
import alert from "assets/images/layout/header/alert.svg";

import bargainHover from "assets/images/layout/header/bargainHover.svg";
import bargain from "assets/images/layout/header/bargain.svg";

import gossHover from "assets/images/layout/header/gossHover.svg";
import goss from "assets/images/layout/header/goss.svg";

import heartHover from "assets/images/layout/header/heartHover.svg";
import heart from "assets/images/layout/header/heart.svg";

import mygroupHover from "assets/images/layout/header/mygroupHover.svg";
import mygroup from "assets/images/layout/header/mygroup.svg";

import preferencesHover from "assets/images/layout/header/preferencesHover.svg";
import preferences from "assets/images/layout/header/preferences.svg";

import sharedHover from "assets/images/layout/header/sharedHover.svg";
import shared from "assets/images/layout/header/shared.svg";

import spoilHover from "assets/images/layout/header/spoilHover.svg";
import spoil from "assets/images/layout/header/spoil.svg";

import SideBarMenuItem from "components/SidebarMenuItem";

const data = [
  {
    active: spoilHover,
    noneactive: spoil,
    title: "Spoil yourself",
  },
  {
    active: gossHover,
    noneactive: goss,
    title: "Open public goss",
  },
  {
    active: bargainHover,
    noneactive: bargain,
    title: "Snatch a bargain",
  },
  {
    active: sharedHover,
    noneactive: shared,
    title: "Shared orders",
  },
  {
    active: mygroupHover,
    noneactive: mygroup,
    title: "My Groups",
  },
  {
    active: heartHover,
    noneactive: heart,
    title: "My Family",
  },
  {
    active: alertHover,
    noneactive: alert,
    title: "Alerts",
  },
  {
    active: preferencesHover,
    noneactive: preferences,
    title: "Shopping preferences",
  },
];

const SideBarMenu = ({ onClose }) => {
  return (
    <MenuContainer>
      <MenuHeaderContainer>
        <h3>
          <FormattedMessage
            id="sidebar.title"
            defaultMessage="Shop for"
          ></FormattedMessage>
        </h3>
        <img src={Cross} onClick={onClose} />
      </MenuHeaderContainer>
      <BodyContainer>
        <IntroductionContainer>
          <CircleContainer>
            <p>JS</p>
          </CircleContainer>
          <NameContainer>
            <p>John Smith</p>
          </NameContainer>
          <WishListContainer>
            <HoverText
              rest="font-size:16px; line-height:140%;"
              color="#36558F"
              hoverColor="orange"
            >
              John's wishilist{" "}
              <ColorText>
                <b>12</b>
              </ColorText>
            </HoverText>
          </WishListContainer>
          <PreferencesContainer>
            <HoverText
              rest="font-size:16px; line-height:140%;"
              color="#36558F"
              hoverColor="orange"
            >
              <FormattedMessage
                id="sidebar.preferences"
                defaultMessage="View preferences"
              ></FormattedMessage>
            </HoverText>
          </PreferencesContainer>
        </IntroductionContainer>
        <ButtonContainer>
          <Button size="big" variant="outlinedbitDarkBlue">
            <FormattedMessage
              id="sidebar.button"
              defaultMessage="Shop for a another:"
            ></FormattedMessage>
          </Button>
        </ButtonContainer>
        <LinkContainer>
          <h3>
            <FormattedMessage
              id="sidebar.otherlink"
              defaultMessage="Other links"
            ></FormattedMessage>
          </h3>
          <LinkMenuContainer>
            <ul>
              {data.map((item, key) => {
                return (
                  <li key={key}>
                    <SideBarMenuItem item={item}></SideBarMenuItem>
                  </li>
                );
              })}
            </ul>
          </LinkMenuContainer>
        </LinkContainer>
      </BodyContainer>
    </MenuContainer>
  );
};

export default SideBarMenu;
