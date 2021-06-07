import styled from "styled-components";

import bargainCard1 from "assets/images/home/bargain-card1.png";
import bargainCard2 from "assets/images/home/bargain-card2.png";
import bargainCard3 from "assets/images/home/bargain-card3.png";

import CustomSlider from "components/Slider/index";

import BargainCard from "components/BargainCard/index";
import { FormattedMessage } from "react-intl";

const BargainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 62px;
  & h4 {
    color: "#140A01";
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 38px;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
`;

const BargainSliderContainer = styled.div``;

const data = [
  {
    color: "#4ECDC4",
    src: bargainCard1,
    title: "#Glutten Free",
  },
  {
    color: "#4ECDC4",
    src: bargainCard2,
    title: "#Vegetarian",
  },
  {
    color: "#4ECDC4",
    src: bargainCard3,
    title: "#Dairy Free",
  },
  {
    color: "#E3E7EA",
    src: bargainCard1,
    title: "#Glutten Free",
  },
  {
    color: "#4ECDC4",
    src: bargainCard2,
    title: "#Vegetarian",
  },
  {
    color: "#E3E7EA",
    src: bargainCard3,
    title: "#Dairy Free",
  },
  {
    color: "#E3E7EA",
    src: bargainCard1,
    title: "#Glutten Free",
  },
  {
    color: "#4ECDC4",
    src: bargainCard2,
    title: "#Vegetarian",
  },
  {
    color: "#E3E7EA",
    src: bargainCard3,
    title: "#Dairy Free",
  },
];

const settings = {
  dots: false,
  slidesToShow: 6,
  slidesToScroll: 6,
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
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

const BargainSection = ({ mobile = false }) => {
  return (
    <BargainContainer>
      <h4>
        <FormattedMessage
          id="bargain.header"
          defaultMessage="Snatch a bargain!"
        ></FormattedMessage>
      </h4>

      <BargainSliderContainer>
        {mobile ? (
          <CardContainer>
            {data.map((item, key) => {
              return (
                <div style={{ marginRight: "30px" }} key={key}>
                  <BargainCard key={key} item={item}></BargainCard>
                </div>
              );
            })}
          </CardContainer>
        ) : (
          <CustomSlider settings={settings} arrowPosition="-10px">
            {data.map((item, key) => {
              return <BargainCard key={key} item={item}></BargainCard>;
            })}
          </CustomSlider>
        )}
      </BargainSliderContainer>
    </BargainContainer>
  );
};

export default BargainSection;
