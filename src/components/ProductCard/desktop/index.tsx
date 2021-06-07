import React from "react";
import { Button } from "components/Button/button";
import commentImage from "assets/images/home/image14.png";
import ellipse136 from "assets/images/home/ellipse136.png";
import ellipse137 from "assets/images/home/ellipse137.png";

import Reaction from "components/Reaction/index";
import * as ProductPlane from "./index.styled";
import { FormattedMessage } from "react-intl";

type Props = {
  list;
};

const ProductCard: React.FC<Props> = ({ list }) => {
  return (
    <ProductPlane.ProductCardContainer>
      <ProductPlane.ImageContainer>
        <div className="imageProduct">
          <img src={list.src} />
        </div>
        {list.isTop ? (
          <div className="imageGroup">
            <div className="imageSection1">
              <img src={ellipse136} />
            </div>
            <div className="imageSection2">
              <img src={ellipse137} />
            </div>
          </div>
        ) : (
          <></>
        )}
      </ProductPlane.ImageContainer>
      <ProductPlane.TitleContainer>
        <ProductPlane.DescriptionHeader>
          <h5>{list.title}</h5>
        </ProductPlane.DescriptionHeader>
        <ProductPlane.DescriptionBody>
          <p>{list.description}</p>
        </ProductPlane.DescriptionBody>
        <ProductPlane.DescriptionButtons>
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
        </ProductPlane.DescriptionButtons>
        <ProductPlane.DescriptionFooter>
          <ProductPlane.FooterBody>
            <p>
              <b>
                <FormattedMessage
                  id="soldby"
                  defaultMessage="Sold by"
                ></FormattedMessage>
                {": "}
              </b>
              {list.soldBy}
            </p>
          </ProductPlane.FooterBody>
          <ProductPlane.FooterBody>
            <p>
              <b>
                <FormattedMessage
                  id="shopsfrom"
                  defaultMessage="Shops From:"
                ></FormattedMessage>{" "}
              </b>
              {list.shipsFrom}
            </p>
          </ProductPlane.FooterBody>
        </ProductPlane.DescriptionFooter>
      </ProductPlane.TitleContainer>
      <ProductPlane.CommentContainer>
        <Reaction comments={list.comment}></Reaction>
        <ProductPlane.PriceContainer>
          {list.downflag ? (
            <div className="downPriceContainer">
              <div className="downPrice">
                <p>save{list.downPrice}</p>
                <span>{list.realPrice}</span>
              </div>
              <span>{list.price}</span>
            </div>
          ) : (
            <p>{list.price}</p>
          )}
        </ProductPlane.PriceContainer>
        <Button size="vbig" variant="orange">
          <FormattedMessage
            id="recommend.open"
            defaultMessage="Perfect gift for"
          ></FormattedMessage>
        </Button>
      </ProductPlane.CommentContainer>
    </ProductPlane.ProductCardContainer>
  );
};

export default ProductCard;
