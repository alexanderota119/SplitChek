import React from "react";
import { Button } from "components/Button/button";

import CirclePattern from "assets/images/home/circle-pattern.png";
import { WaveLine } from "assets/icons/WayLine";

import {
  ReviewArea,
  GradientContainer,
  WavyDiv,
  ReviewBtn,
  CircleMd,
  CircleBg,
  CirclePat,
  ReviewTitle,
  GitfTitle,
  GiftSection,
  IconsDiv,
} from "site-settings/site-style/home/review-section.style";
import ReviewCarousel from "features/Carousel/review";
import GiftCarousel from "features/Carousel/gift";
export default function ReviewSection() {
  return (
    <ReviewArea>
      <GradientContainer>
        <div className="wrapper">
          <ReviewTitle>
            Kind words from our happy SplitChek community
          </ReviewTitle>
        </div>
        <ReviewCarousel />
        <ReviewBtn>
          <Button variant="orange" size="long">
            Rate us
          </Button>
        </ReviewBtn>
        <IconsDiv>
          <CircleBg className="circle" />
          <CircleMd className="circle" />
          <CirclePat>
            <img src={CirclePattern} alt={"my gift"} />
          </CirclePat>
          <WavyDiv>
            <WaveLine />
          </WavyDiv>
        </IconsDiv>
        <GiftSection>
          <div className="wrapper">
            <GitfTitle>Need some inspo? Check out our featured gifts</GitfTitle>
          </div>
          <GiftCarousel />
        </GiftSection>
      </GradientContainer>
    </ReviewArea>
  );
}
