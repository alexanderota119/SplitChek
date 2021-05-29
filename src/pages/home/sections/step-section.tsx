import React from "react";
import {
  StepArea,
  CirclePatternView,
  GradientComponent,
  SectionCircleBg,
  SectionCircleMd,
  SectionCircleSm,
  SectionCircleVerySm,
  SectionCircleExtraSm,
  StepHeader,
  StepText,
  StepsColumns_Right,
  StepsColumns,
  StepsColumns_Left,
} from "site-settings/site-style/home/step-section.style";
import CirclePattern from "assets/images/home/circle-pattern.png";
import Container from "components/Container/container";
import StepCard from "features/Card/step-card";
import SpreadJoyImage from "assets/images/home/image1.png";
import ColorText from "components/ColorText/color-text";
export default function StepSection() {
  return (
    <StepArea>
      <GradientComponent>
        <Container>
          <CirclePatternView>
            <img src={CirclePattern} alt="circle-pattern" />
          </CirclePatternView>
          <StepHeader>So, how does SplitChek work?</StepHeader>
          <StepText>
            <p>
              SplitChek is a{" "}
              <ColorText rest="  font-weight: 700;">
                social gift-giving platform
              </ColorText>
              , bringing together family, friends and the community to find, buy
              and share meaningful gifts.
            </p>
            <p>
              Gift-shopping just got a whole lot easier! With SplitChek you can:
            </p>
          </StepText>
          <StepCard />
          <StepsColumns>
            <StepsColumns_Left>
              <img src={SpreadJoyImage} alt="spread the joy" />
            </StepsColumns_Left>
            <StepsColumns_Right>
              <h2>Spread the joy with SplitChek</h2>
              <p>
                We believe everyone deserves the joy of giving and receiving
                gifts. And when we share the gift-giving experience, we can
                sprinkle that joy around like feelgood confetti.
              </p>
              <p>
                <ColorText rest="  font-weight: 700;">
                  With our social gifting community
                </ColorText>
                , you’ll never shop alone. The SplitChek community not only
                offers a fun, safe and social way to shop — members can also
                help each other by contributing towards gifts for others.
              </p>
              <p>How’s that for sharing the warm-and-fuzzies, eh?</p>
            </StepsColumns_Right>
          </StepsColumns>
          <SectionCircleBg className="circle" />
          <SectionCircleMd className="circle" />
          <SectionCircleSm className="circle" />
          <SectionCircleVerySm className="circle" />
          <SectionCircleExtraSm className="circle" />
        </Container>
      </GradientComponent>
    </StepArea>
  );
}
