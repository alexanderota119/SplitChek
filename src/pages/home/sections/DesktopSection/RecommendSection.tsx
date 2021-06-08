import {
  RecommendSectionArea,
  RecommendSliderContainer,
  RecommendTitle,
  LineContainer,
} from "site-settings/site-style/home/RecommendSection.style";

import CustomSlider from "components/Slider/index";
import RcdCarsouelCard from "components/RcdCarsouelCard/index";

import BargainCard from "components/BargainCard/index";

import { data } from "data/home/desktop/RecommendSection";
import { FormattedMessage } from "react-intl";

import linesvg from "assets/images/home/line.svg";

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
        <h3>
          <FormattedMessage
            id="recommendproducts.header"
            defaultMessage="Recomended products:"
          ></FormattedMessage>
        </h3>
      </RecommendTitle>
      <RecommendSliderContainer>
        <CustomSlider settings={settings} arrowPosition="-0px" hide={true}>
          {data.map((item, key) => {
            return <RcdCarsouelCard list={item} key={key}></RcdCarsouelCard>;
          })}
        </CustomSlider>
      </RecommendSliderContainer>
      <LineContainer>
        <img src={linesvg} />
      </LineContainer>
    </RecommendSectionArea>
  );
};

export default RecommendSection;
