import React from "react";
import { useMedia } from "utils/use-media";
import Flickity from "react-flickity-component";
import VideoSlide1 from "assets/images/home/videoSlide1.png";
import VideoSlide2 from "assets/images/home/videoSlide2.png";
import { StarBar } from "components/StarBar/star-bar";
import {
  ReviewSection,
  CarouselsCell,
  SlideText,
  ReviewSlide,
} from "./review.style";
export default function ReviewCarousel() {
  const isMobile = useMedia("(max-width: 992px)");
  const flickityOptions = isMobile
    ? {
        groupCells: false,
        wrapAround: true,
        cellAlign: "center",
        contain: true,
      }
    : {
        groupCells: 2,
        wrapAround: true,
        cellAlign: "center",
        contain: true,
      };

  return (
    <ReviewSection>
      <Flickity
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <CarouselsCell>
          <ReviewSlide>
            <img src={VideoSlide1} alt={"review slide"} />

            <SlideText>
              <h6>Jenna</h6>
              <p>
                I love Splitcheck!!=) You can find out exactly what your loved
                ones want without giving away the surprise!
              </p>
              <StarBar count={4} />
            </SlideText>
          </ReviewSlide>
        </CarouselsCell>
        <CarouselsCell>
          <ReviewSlide>
            <img src={VideoSlide2} alt={"review slide"} />
            <SlideText>
              <h6>Monica</h6>
              <p>
                Splitcheck!!! You can find out exactly what your loved ones want
                without giving away the surprise! You can find out exactly what
                your loved ones...
              </p>
              <StarBar count={5} />
            </SlideText>
          </ReviewSlide>
        </CarouselsCell>
        <CarouselsCell>
          <ReviewSlide>
            <img src={VideoSlide1} alt={"review slide"} />
            <SlideText>
              <h6>Jenna</h6>
              <p>
                I love Splitcheck!!=) You can find out exactly what your loved
                ones want without giving away the surprise!
              </p>
              <StarBar count={5} />
            </SlideText>
          </ReviewSlide>
        </CarouselsCell>
        <CarouselsCell>
          <ReviewSlide>
            <img src={VideoSlide2} alt={"review slide"} />
            <SlideText>
              <h6>Monica</h6>
              <p>
                Splitcheck!!! You can find out exactly what your loved ones want
                without giving away the surprise! You can find out exactly what
                your loved ones...
              </p>
              <StarBar count={3} />
            </SlideText>
          </ReviewSlide>
        </CarouselsCell>
      </Flickity>
    </ReviewSection>
  );
}
