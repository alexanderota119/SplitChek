import React from "react";
import ellipse136 from "assets/images/home/ellipse136.png";
import ellipse137 from "assets/images/home/ellipse137.png";
import {
  CardWrapper,
  BadgeContainer,
  CardContainer,
  ImageContainer,
  TitleContainer,
  DescriptionContainer,
  FooterContainer,
  ProductContainer,
} from "./index.style";
import { Button } from "components/Button/button";
type Props = {
  list;
};

const SponsoredBottomCard: React.FC<Props> = ({ list }) => {
  return (
    <CardWrapper>
      <CardContainer>
        <ProductContainer>
          <ImageContainer>
            <img src={list.src} />
          </ImageContainer>
          <TitleContainer>
            <h5>{list.title}</h5>
            <p>{list.price}</p>
            <span>Queensland - {list.shipsFrom}</span>
          </TitleContainer>
        </ProductContainer>
        <DescriptionContainer>
          <p>
            {list.description}...
            <a href={list.href}> Read More</a>
          </p>
        </DescriptionContainer>
        <FooterContainer>
          <BadgeContainer>
            <div className="imageGroup">
              <div className="imageSection1">
                <img src={ellipse136} />
              </div>
              <div className="imageSection2">
                <img src={ellipse137} />
              </div>
            </div>
          </BadgeContainer>
          <Button size="vsmall" variant="outlinedGray">
            Open
          </Button>
        </FooterContainer>
      </CardContainer>
    </CardWrapper>
  );
};
export default SponsoredBottomCard;
