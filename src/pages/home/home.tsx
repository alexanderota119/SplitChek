import React, { useEffect, useRef, useState } from "react";
import CarsouelSection from "./sections/CarsouelSection";
import ProductCardSection from "./sections/ProductCardSection";
import RecommendSection from "./sections/RecommendSection";
import SponsoredCardSection from "./sections/SponsoredSection";
import SponsoredBottomSlider from "./sections/SponsoredBottomSlider";
import RcdProductCard from "components/RcdProductCard/desktop/";

import RecommendProductSection from "./sections/RecommendProductSection";
import banner18 from "assets/images/home/banner18.png";
import styled from "styled-components";

const BrowerGiftsContainer = styled.div`
  padding-top: 44px;
  padding-bottom: 158px;

  & .desktop {
    display: block;
  }
  & .mobile {
    display: none;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }
  @media screen and (max-width: 768px) {
    padding-top: 34px;
    padding-bottom: 466px;
    & .desktop {
      display: none;
    }
    & .mobile {
      display: block;
    }
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  width: 100%;
  @media screen and (max-width: 1399px) {
    display: flex;
    flex-direction: column;
  }
`;

const ProductSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 42px;
  width: calc(100% - 362px);

  @media screen and (max-width: 1399px) {
    width: 100%;
  }
`;

//! delete
const list = {
  src: banner18,
  title: "Gross title",
  description:
    "To help your skin thrive, use Moroccan argan extract which conditions and moisturizes while chlorella brings a boost of skin-benefiting vitamins and omega 3s for extra glowing goodness",
  discounts: "02.02.2022 ",
  comment: 56,
};

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <BrowerGiftsContainer>
            <div className="desktop">
              <CarsouelSection></CarsouelSection>
              <SectionContainer>
                <ProductSectionContainer>
                  <ProductCardSection />
                  <RecommendSection />
                  <RcdProductCard list={list} />
                  <RecommendProductSection />
                </ProductSectionContainer>

                <SponsoredCardSection></SponsoredCardSection>
              </SectionContainer>
            </div>
            <div className="mobile">123</div>
          </BrowerGiftsContainer>
        </div>
      </div>
    </>
  );
}
