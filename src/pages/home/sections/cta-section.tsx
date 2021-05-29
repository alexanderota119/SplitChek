import React from "react";
import {
  CtaArea,
  BtnDiv,
  CtnInner,
  CircleExtraBig,
  CircleBig,
  CircleMd,
  CircleSm,
  CircleExtraSm,
  CircleVerySm,
  CircleUltraSm,
} from "site-settings/site-style/home/cta-section.style";
import { Button } from "components/Button/button";
import Container from "components/Container/container";
import ColorText from "components/ColorText/color-text";
export default function ReviewSection() {
  return (
    <CtaArea>
      <Container>
        <CtnInner>
          <h3>Want a fun, safe and social way to shop for your next gift?</h3>
          <p>
            Join <ColorText rest="font-weight:700;">SplitChek</ColorText> today
            and{" "}
            <ColorText color="blue.regular" rest="font-weight:700;">
              receive 20%
            </ColorText>{" "}
            off at selected stores for your first 2 months!
          </p>
          <BtnDiv>
            <Button variant="orange" size="big">
              Create Your Free Account
            </Button>
          </BtnDiv>
        </CtnInner>
        <CircleExtraBig className="circle" />
        <CircleBig className="circle" />
        <CircleMd className="circle" />
        <CircleSm className="circle" />
        <CircleExtraSm className="circle" />
        <CircleVerySm className="circle" />
        <CircleUltraSm className="circle" />
      </Container>
    </CtaArea>
  );
}
