import SponsordCard from "components/SponsoredCard/";
import image13 from "assets/images/home/image13.png";
import image20 from "assets/images/home/image20.png";
import avatar from "assets/images/home/avatar.png";

import {
  RcommendProductOneContainer,
  RecommendProductsContainer,
  RecommendSectionArea,
  RecommendSliderContainer,
  RecommendTitle,
} from "../../../site-settings/site-style/home/RecommendSection.style";

import CustomSlider from "components/Slider/index";
import RcdCarsouelCard from "components/RcdCarsouelCard/index";

const data = [
  {
    src: image13,
    title: "INCREDIBLY CLEAR ACNE SPOT 14.7ML",
    avatar: avatar,
    price: "$22.95",
  },
  {
    src: image20,
    title: "INCREDIBLY CLEAR ACNE SPOT 14.7ML",
    avatar: avatar,
    price: "$22.95",
  },
  {
    src: image13,
    title: "INCREDIBLY CLEAR ACNE SPOT 14.7ML",
    avatar: avatar,
    price: "$22.95",
  },
  {
    src: image20,
    title: "INCREDIBLY CLEAR ACNE SPOT 14.7ML",
    avatar: avatar,
    price: "$22.95",
  },
];
const settings = {
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const RecommendSection: React.FC = () => {
  return (
    <RecommendSectionArea>
      <RecommendTitle>
        <h1>Recomended products</h1>
      </RecommendTitle>
      <RecommendSliderContainer>
        <CustomSlider settings={settings}>
          {data.map((item, key) => {
            return <RcdCarsouelCard list={item} key={key}></RcdCarsouelCard>;
          })}
        </CustomSlider>
      </RecommendSliderContainer>
    </RecommendSectionArea>
  );
};

export default RecommendSection;
