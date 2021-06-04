import React from "react";
import { Button } from "components/Button/button";
import commentImage from "assets/images/home/image14.png";
import vector84 from "assets/images/home/vector84.svg";
import * as ProductPlane from "./index.styled";
import Reaction from "components/Reaction/index";
type Props = {
  list;
};

const RcdProductCard: React.FC<Props> = ({ list }) => {
  console.log(list.src);
  return (
    <ProductPlane.ProductCardContainer>
      <ProductPlane.ImageContainer>
        <ProductPlane.ImageProduct>
          <img src={list.src} />
          <div className="img-desc">
            <h3>45%</h3>
            <p>everything</p>
          </div>
        </ProductPlane.ImageProduct>
        <ProductPlane.MoreOfferContainer>
          <img src={vector84} />
          <span>
            <a>more offers</a>
          </span>
        </ProductPlane.MoreOfferContainer>
      </ProductPlane.ImageContainer>
      <ProductPlane.TitleContainer>
        <h5>{list.title}</h5>
        <p className="product-description">{list.description}</p>
        <p className="product-discounts">
          <b>Discounts: </b>
          {list.discounts}
        </p>
      </ProductPlane.TitleContainer>
      <ProductPlane.CommentContainer>
        <Reaction comments={list.comment}></Reaction>
        <ProductPlane.PriceContainer>
          <p>{list.price}</p>
        </ProductPlane.PriceContainer>
        <Button size="vbig" variant="orange">
          Open
        </Button>
      </ProductPlane.CommentContainer>
    </ProductPlane.ProductCardContainer>
  );
};

export default RcdProductCard;
