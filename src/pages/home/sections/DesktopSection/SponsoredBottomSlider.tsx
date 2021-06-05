import React from "react";
import SponsoredBottomCard from "components/SponsoredBottomCard";
import CustomSlider from "components/Slider/";

import { data } from "data/home/desktop/SponsoredBottomSlider";

import styled from "styled-components";

const SponsoredSliderArea = styled.div`
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: -30px;
  @media screen and (max-width: 1399px) {
    flex-wrap: wrap;
    margin-right: -20px;
    margin-left: -20px;
  }
`;

const settings = {
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SponsoredBottomSlider: React.FC = () => {
  return (
    <SponsoredSliderArea>
      <CardContainer>
        {data.map((item, key) => {
          return (
            <SponsoredBottomCard list={item} key={key}></SponsoredBottomCard>
          );
        })}
      </CardContainer>
    </SponsoredSliderArea>
  );
};

export default SponsoredBottomSlider;
