import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
const CustomSlider = ({ settings, arrowPosition, children }) => {
  return (
    <Slider
      {...settings}
      nextArrow={<NextArrow arrowPosition={arrowPosition} />}
      prevArrow={<PrevArrow arrowPosition={arrowPosition} />}
    >
      {children}
    </Slider>
  );
};
export default CustomSlider;
