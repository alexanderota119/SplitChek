import React from "react";
import SponsoredBottomCard from "../../../components/SponsoredBottomCard";
import CustomSlider from "components/Slider/";
import pdt1 from "assets/images/home/image20.png";
import styled from "styled-components";

const SponsoredSliderArea = styled.div`
  padding-top: 30px;
`;

const data = [
  {
    src: pdt1,
    title: "INCREDIBLY CLEAR ACNE SPOT 14.7ML",
    price: "$522.95",
    shipsFrom: "Australia",
    href: "",
    description:
      "Do you want a clearer skin? Then you found the right product. The solution is salycylic acid, glycolic acid and white willow bark",
  },
  {
    src: pdt1,
    title: "INCREDIBLY CLEAR ACNE SPOT 14.7ML",
    price: "$522.95",
    shipsFrom: "Australia",
    href: "",
    description:
      "Do you want a clearer skin? Then you found the right product. The solution is salycylic acid, glycolic acid and white willow bark",
  },
  {
    src: pdt1,
    title: "INCREDIBLY CLEAR ACNE SPOT 14.7ML",
    price: "$522.95",
    shipsFrom: "Australia",
    href: "",
    description:
      "Do you want a clearer skin? Then you found the right product. The solution is salycylic acid, glycolic acid and white willow bark",
  },
  {
    src: pdt1,
    title: "INCREDIBLY CLEAR ACNE SPOT 14.7ML",
    price: "$522.95",
    shipsFrom: "Australia",
    href: "",
    description:
      "Do you want a clearer skin? Then you found the right product. The solution is salycylic acid, glycolic acid and white willow bark",
  },
];

const settings = {
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  // responsive: [
  //   {
  //     breakpoint: 1399,
  //     settings: {
  //       slidesToShow: 6,
  //       slidesToScroll: 6,
  //     },
  //   },
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 5,
  //       slidesToScroll: 5,
  //     },
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //     },
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
};

const SponsoredBottomSlider: React.FC = () => {
  return (
    <SponsoredSliderArea>
      <CustomSlider settings={settings}>
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
