import React from "react";

//! styles
import {
  CarsouleArea,
  CardContainer,
} from "site-settings/site-style/home/CarsoulSection.style.tsx";

//! components
import CarsouelCell from "components/CarsouelCell";
import CustomSlider from "components/Slider/";
//import Flickity from "react-flickity-component";

//! data
import { data } from "data/home/desktop/CarsouelSection";

const CarsouelSection = ({ mobile = false, setting }) => {
  return (
    <CarsouleArea>
      {!mobile ? (
        <CustomSlider settings={setting} arrowPosition={"-10px"} hide={true}>
          {data.map((item, key) => {
            return (
              <CarsouelCell
                key={key}
                src={item.src}
                title={item.title}
                isVideo={item.isVideo}
              ></CarsouelCell>
            );
          })}
        </CustomSlider>
      ) : (
        <CardContainer>
          {data.map((item, key) => {
            return (
              <div style={{ marginRight: "10px" }} key={key}>
                <CarsouelCell
                  src={item.src}
                  title={item.title}
                  isVideo={item.isVideo}
                ></CarsouelCell>
              </div>
            );
          })}
        </CardContainer>
      )}
    </CarsouleArea>
  );
};

export default CarsouelSection;
