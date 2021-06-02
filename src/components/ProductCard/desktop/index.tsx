import React from "react";
import { Button } from "components/Button/button";
import commentImage from "assets/images/home/image14.png";
import ellipse136 from "assets/images/home/ellipse136.png";
import ellipse137 from "assets/images/home/ellipse137.png";
import * as ProductPlane from "./index.styled";

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
              <b>Sold by: </b>
              {list.soldBy}
            </p>
          </ProductPlane.FooterBody>
          <ProductPlane.FooterBody>
            <p>
              <b>Shops From: </b> {list.shipsFrom}
            </p>
          </ProductPlane.FooterBody>
        </ProductPlane.DescriptionFooter>
      </ProductPlane.TitleContainer>
      <ProductPlane.CommentContainer>
        <ProductPlane.CommentImageArea>
          <ProductPlane.CommentNumberImage>
            <img src={commentImage} />
            <p>{list.comment}</p>
          </ProductPlane.CommentNumberImage>
          <ProductPlane.CommentText>
            Comments {list.comment}
          </ProductPlane.CommentText>
        </ProductPlane.CommentImageArea>

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
          Open
        </Button>
      </ProductPlane.CommentContainer>
    </ProductPlane.ProductCardContainer>
  );
};

export default ProductCard;
