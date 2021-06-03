import React from "react";
import SponsoredBottomCard from "components/SponsoredBottomCard";
import CustomSlider from "components/Slider/";

import { data } from "data/home/desktop/SponsoredBottomSlider";

import styled from "styled-components";

const SponsoredSliderArea = styled.div`
  width: 100%;
`;

const settings = {
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SponsoredBottomSlider: React.FC = () => {
  return (
    <SponsoredSliderArea>
      <CustomSlider settings={settings} arrowPosition="-0px">
        {data.map((item, key) => {
          return (
            <SponsoredBottomCard list={item} key={key}></SponsoredBottomCard>
          );
        })}
      </CustomSlider>
    </SponsoredSliderArea>
  );
};

export default SponsoredBottomSlider;
