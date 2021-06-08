import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
const CustomSlider = ({
  settings,
  arrowPosition,
  arrowTopPosition = "16px",
  hide = false,
  children,
}) => {
  return (
    <Slider
      {...settings}
      nextArrow={
        <NextArrow
          arrowPosition={arrowPosition}
          arrowTopPosition={arrowTopPosition}
          hide={hide}
        />
      }
      prevArrow={
        <PrevArrow
          arrowPosition={arrowPosition}
          arrowTopPosition={arrowTopPosition}
          hide={hide}
        />
      }
    >
      {children}
    </Slider>
  );
};
export default CustomSlider;
