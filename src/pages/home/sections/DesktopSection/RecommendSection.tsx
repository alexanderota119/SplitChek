import {
  RecommendSectionArea,
  RecommendSliderContainer,
  RecommendTitle,
} from "site-settings/site-style/home/RecommendSection.style";

import CustomSlider from "components/Slider/index";
import RcdCarsouelCard from "components/RcdCarsouelCard/index";

import { data } from "data/home/desktop/RecommendSection";

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
        <h1>Recomended products:</h1>
      </RecommendTitle>
      <RecommendSliderContainer>
        <CustomSlider settings={settings} arrowPosition="-0px">
          {data.map((item, key) => {
            return <RcdCarsouelCard list={item} key={key}></RcdCarsouelCard>;
          })}
        </CustomSlider>
      </RecommendSliderContainer>
    </RecommendSectionArea>
  );
};

export default RecommendSection;
