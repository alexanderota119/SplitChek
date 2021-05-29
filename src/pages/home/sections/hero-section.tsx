import React from "react";
import Link from "next/link";
import {
  HeroArea,
  HeroInner,
  HeroImage,
  Divider,
  HeroDesc,
  HeroActions,
  HeroButtonGroup,
  HeroHeader,
  DescView,
  HeroCircle,
  SplitTitle,
  WebLineDiv,
} from "site-settings/site-style/home/hero-section.style";
import HeroSorce from "assets/images/home/hero-inner.png";
import { Button } from "components/Button/button";
import Container from "components/Container/container";
import ColorText from "components/ColorText/color-text";
import { FormattedMessage, useIntl } from "react-intl";
import { WaveLine } from "assets/icons/WayLine";

export default function HeroSection() {
  const intl = useIntl();

  return (
    <HeroArea>
      <Container>
        <HeroInner>
          <DescView>
            <HeroHeader>
              <FormattedMessage
                id="home.heroHeader"
                defaultMessage="Finding the perfect gift can be stressful, right?"
              ></FormattedMessage>
            </HeroHeader>
            <HeroDesc>
              Gift-shopping has always been a guessing game. You can spend hours
              searching for gifts for your family and friends, simply hoping
              you’ll find something they love…
            </HeroDesc>
            <Divider>
              <ColorText rest="font-weight:700;">But not anymore!</ColorText>
            </Divider>
            <HeroDesc>
              SplitChek takes the guesswork out of gift-giving. Think of us as
              your ultimate gift-shopping partner. A platf...
            </HeroDesc>
            <Link href="#">Read more</Link>
            <HeroButtonGroup>
              <HeroActions>
                <Button variant="orange" size="big">
                  Create Your Free Account
                </Button>
              </HeroActions>
              <HeroActions>
                <Button size="big" variant="outlinedGray">
                  I Have An Account
                </Button>
              </HeroActions>
            </HeroButtonGroup>
          </DescView>
          <SplitTitle>
            <ColorText rest="font-weight: 800;">SplitChek</ColorText> makes{" "}
            <br />
            gift-giving <ColorText rest="font-weight: 800;">easy</ColorText>
            <WebLineDiv>
              <WaveLine />
            </WebLineDiv>
          </SplitTitle>

          <HeroImage>
            <img src={HeroSorce} alt="Hero Inner Image" />
          </HeroImage>
        </HeroInner>
        <HeroCircle className="circle" />
      </Container>
    </HeroArea>
  );
}
