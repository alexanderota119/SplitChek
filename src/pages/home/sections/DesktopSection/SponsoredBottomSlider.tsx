import React from "react";
import SponsoredBottomCard from "components/SponsoredBottomCard";

import { data } from "data/home/desktop/SponsoredBottomSlider";

import styled from "styled-components";

import Line from "assets/images/home/line.svg";

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

const LineContainer = styled.div`
  position: absolute;
  left: 111px;
  bottom: 50px;
  z-index: -1;
  & img {
    min-width: 420.12px;
    height: 42.98px;
  }
  @media screen and (max-width: 1399px) {
    bottom: 370px;
    left: 170px;
  }
  @media screen and (max-width: 797px) {
    left: 10px;
    bottom: 450px;
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
      <LineContainer>
        <img src={Line}></img>
      </LineContainer>
    </SponsoredSliderArea>
  );
};

export default SponsoredBottomSlider;
