import * as Sponsored from "./index.styled";
import ellipse136 from "assets/images/home/ellipse136.png";
import ellipse137 from "assets/images/home/ellipse137.png";
import { Button } from "components/Button/button";

import React from "react";
type Props = {
  list;
};

const SponsordCard: React.FC<Props> = ({ list }) => {
  return (
    <Sponsored.SponsoredCardWrapper>
      <Sponsored.SponsoredSectionArea>
        <Sponsored.SponsoredHeader>
          <div className="imageGroup">
            <div className="imageSection1">
              <img src={ellipse136} />
            </div>
            <div className="imageSection2">
              <img src={ellipse137} />
            </div>
          </div>
          <h5>{list.title}</h5>
        </Sponsored.SponsoredHeader>
        <Sponsored.SponsoredProduct>
          <img src={list.src} />
          <Sponsored.ProductDescription>
            <div className="priceCotainer">
              <span>{list.price}</span>
              <p>Est. Shipping: Call for a quote</p>
            </div>

            <p>{list.shipsFrom}</p>
          </Sponsored.ProductDescription>
        </Sponsored.SponsoredProduct>
        <Sponsored.SponsoredDesciption>
          {list.description}
          <a>Read More</a>
        </Sponsored.SponsoredDesciption>
        <Sponsored.SponsoredButtonGroup>
          <Button size="vsmall" variant="outlinedbitBlue">
            #Vegan Friendly
          </Button>
          <Button size="vsmall" variant="outlinedbitBlue">
            #Vegetarian
          </Button>
          <Button size="vsmall" variant="outlinedbitBlue">
            #Dairy Free
          </Button>
          <Button size="vsmall" variant="outlinedbitBlue">
            #Glutten Free
          </Button>
        </Sponsored.SponsoredButtonGroup>
        <Sponsored.SponsoredButton>
          <Button size="vbig" variant="outlinedGray">
            Top
          </Button>
        </Sponsored.SponsoredButton>
      </Sponsored.SponsoredSectionArea>
    </Sponsored.SponsoredCardWrapper>
  );
};

export default SponsordCard;
