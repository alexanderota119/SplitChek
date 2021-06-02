import styled from "styled-components";
import Slider from "react-slick";

const CustomSlider = ({ settings, children }) => {
  return (
    <Slider {...settings} arrows={false}>
      {children}
    </Slider>
  );
};
export default CustomSlider;
