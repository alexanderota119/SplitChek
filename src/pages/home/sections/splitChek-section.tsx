import React from "react";
import {
  SplitChekArea,
  SplitTitle,
  SectionCircleMd,
  SectionCircleSm,
  SectionCircleBig,
} from "site-settings/site-style/home/splitCheck-section.style";
import ColorText from "components/ColorText/color-text";
import Container from "components/Container/container";
export default function SplitChekSection() {
  return (
    <SplitChekArea>
      <Container>
        <SplitTitle>
          <ColorText rest="font-weight: 800;">SplitChek</ColorText> makes <br />
          gift-giving <ColorText rest="font-weight: 800;">easy</ColorText>
        </SplitTitle>
        <SectionCircleBig className="circle" />
        <SectionCircleMd className="circle" />
        <SectionCircleSm className="circle" />
      </Container>
    </SplitChekArea>
  );
}
