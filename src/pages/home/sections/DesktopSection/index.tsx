import CarsouelSection from "../DesktopSection/CarsouelSection";
import ProductCardSection from "../DesktopSection/ProductCardSection";
import RecommendSection from "../DesktopSection/RecommendSection";
import SponsoredCardSection from "../DesktopSection/SponsoredSection";
import RecommendProductSection from "../DesktopSection/RecommendProductSection";
//! components
import RcdProductCard from "components/RcdProductCard/desktop/";

//! images
import banner18 from "assets/images/home/banner18.png";

import {
  ProductSectionContainer,
  SectionContainer,
  SponsoredBottomContainer,
} from "site-settings/site-style/home/home.style";

import { data } from "data/home/desktop/SponsoredBottomSlider";
import SponsoredBottomCard from "components/SponsoredBottomCard";
import SponsoredBottomSlider from "./SponsoredBottomSlider";

const list = {
  src: banner18,
  title: "Gross title",
  description:
    "To help your skin thrive, use Moroccan argan extract which conditions and moisturizes while chlorella brings a boost of skin-benefiting vitamins and omega 3s for extra glowing goodness",
  discounts: "02.02.2022 ",
  comment: 56,
};
//! Settings
const Desktopsettings = {
  dots: false,
  slidesToShow: 8,
  slidesToScroll: 8,
  initialSlide: 0,

  responsive: [
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
  ],
};

const DesktopSection = () => {
  return (
    <>
      <CarsouelSection setting={Desktopsettings}></CarsouelSection>
      <SectionContainer>
        <ProductSectionContainer>
          <ProductCardSection />
          <RecommendSection />
          <RcdProductCard list={list} />
          <RecommendProductSection />
        </ProductSectionContainer>
        <SponsoredCardSection></SponsoredCardSection>
      </SectionContainer>
      <SponsoredBottomSlider></SponsoredBottomSlider>
    </>
  );
};

export default DesktopSection;
