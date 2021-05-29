import React from "react";
import {
  ImageArea,
  CircleBg,
  CircleMd,
  CircleSm,
  WebLineDiv,
  ImageDiv,
  SectionRight,
  SectionLeft,
} from "site-settings/site-style/home/image-section.style";
import Image2 from "assets/images/home/image2.png";
import { WaveLine } from "assets/icons/WayLine";
import ColorText from "components/ColorText/color-text";
import Container from "components/Container/container";

export default function ImageSection() {
  return (
    <ImageArea>
      <Container>
        <ImageDiv>
          <SectionLeft>
            <img src={Image2} alt="image section" />
          </SectionLeft>
          <SectionRight>
            <h3>
              <ColorText> Take the</ColorText> guesswork out of{" "}
              <ColorText color="blue.regular" rest="font-weight:700;">
                gift-giving
              </ColorText>
            </h3>
          </SectionRight>
        </ImageDiv>
        <WebLineDiv>
          <WaveLine />
        </WebLineDiv>
        <CircleBg className="circle" />
        <CircleMd className="circle" />
        <CircleSm className="circle" />
      </Container>
    </ImageArea>
  );
}
