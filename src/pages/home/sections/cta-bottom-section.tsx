import React from "react";
import {
  CtaBArea,
  CtaCotainer,
  PeopleImageStyle,
  CtaButtonDiv,
  CtaPattern,
  CircleBg,
  CircleMd,
} from "site-settings/site-style/home/cta-bottom-section.style";
import PeopleImage from "assets/images/home/people.png";
import CirclePattern from "assets/images/home/circle-pattern.png";
import { Button } from "components/Button/button";
import ColorText from "components/ColorText/color-text";
import Container from "components/Container/container";
export default function CtaBSection() {
  return (
    <CtaBArea>
      <Container>
        <CtaCotainer>
          <PeopleImageStyle>
            <img src={PeopleImage} alt="People" />
          </PeopleImageStyle>
          <h4>
            Join{" "}
            <ColorText color="orange.regular" rest="font-weight:700;">
              SplitChek
            </ColorText>{" "}
            today and{" "}
            <ColorText color="blue.regular" rest="font-weight:700;">
              receive 20%
            </ColorText>{" "}
            off at selected stores for your first 2 months!
          </h4>
          <CtaButtonDiv>
            <Button variant="orange" size="big">
              Create Your free account
            </Button>
          </CtaButtonDiv>
          <CtaPattern>
            <img src={CirclePattern} alt="circle pattern" />
          </CtaPattern>
          <CircleBg className="circle" />
          <CircleMd className="circle" />
        </CtaCotainer>
      </Container>
    </CtaBArea>
  );
}
