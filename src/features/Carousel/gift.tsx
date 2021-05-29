import React from "react";
import Flickity from "react-flickity-component";

import { GiftSection, CarouselsCell, GiftSlide } from "./gift.style";

import Gift1 from "assets/images/home/gift1.png";
import Gift2 from "assets/images/home/gift2.png";
import Gift3 from "assets/images/home/gift3.png";
import Gift4 from "assets/images/home/gift4.png";
export default function ReviewCarousel() {
  // const isMobile = false;
  const flickityOptions_gift = {
    groupCells: false,
    wrapAround: false,
    cellAlign: "left",
    contain: true,
  };

  return (
    <GiftSection>
      <Flickity
        options={flickityOptions_gift} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <CarouselsCell>
          <GiftSlide>
            <img src={Gift1} alt={"my gift"} />
          </GiftSlide>
        </CarouselsCell>
        <CarouselsCell>
          <GiftSlide>
            <img src={Gift2} alt={"my gift"} />
          </GiftSlide>
        </CarouselsCell>
        <CarouselsCell>
          <GiftSlide>
            <img src={Gift3} alt={"my gift"} />
          </GiftSlide>
        </CarouselsCell>
        <CarouselsCell>
          <GiftSlide>
            <img src={Gift4} alt={"my gift"} />
          </GiftSlide>
        </CarouselsCell>
      </Flickity>
    </GiftSection>
  );
}
