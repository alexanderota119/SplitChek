import React from "react";

//! styles
import { BrowerGiftsContainer } from "site-settings/site-style/home/home.style";

//! sections

import MobileSections from "./sections/MobileSections";
import DesktopSections from "./sections/DesktopSection";

//! components
import Circle from "components/Circle";

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <BrowerGiftsContainer>
            <div className="desktop">
              <DesktopSections></DesktopSections>
            </div>
            <div className="mobile">
              <MobileSections></MobileSections>
            </div>
          </BrowerGiftsContainer>
        </div>
      </div>
    </>
  );
}
