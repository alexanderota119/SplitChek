import React from "react";
import SponsoredBottomCard from "components/SponsoredBottomCard";
import CustomSlider from "components/Slider/";

import { data } from "data/home/desktop/SponsoredBottomSlider";

import styled from "styled-components";

const SponsoredSliderArea = styled.div`
  width: 100%;
`;

const CardContainer = styled.div`
  width: 100%;
`;

const settings = {
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MobileSponsoredSlider: React.FC = () => {
  return (
    <SponsoredSliderArea>
      <CardContainer>
        <CustomSlider settings={settings} arrowPosition="5px">
          {data.map((item, key) => {
            return (
              <SponsoredBottomCard list={item} key={key}></SponsoredBottomCard>
            );
          })}
        </CustomSlider>
      </CardContainer>
    </SponsoredSliderArea>
  );
};

export default MobileSponsoredSlider;
