import commentImage from "assets/images/home/image14.png";
import vector84 from "assets/images/home/vector84.svg";
import { Button } from "components/Button/button";
import { defaultCipherList } from "constants";
import * as ProductPlane from "./index.style";
const MobileRcdProduct = ({ list }) => {
  return (
    <ProductPlane.CardWrapper>
      <ProductPlane.CardContainer>
        <ProductPlane.RcdImageContainer>
          <img src={list.src} />
          <div className="img-desc">
            <h3>45%</h3>
            <p>everything</p>
          </div>
        </ProductPlane.RcdImageContainer>
        <ProductPlane.BodyContainer>
          <ProductPlane.PriceContainer>
            <div className="price">
              <h5>{list.title}</h5>
            </div>
            <p>
              <b>Discounts </b>
              {list.discounts}
            </p>
          </ProductPlane.PriceContainer>
          <ProductPlane.CommentImageArea>
            <ProductPlane.CommentNumberImage>
              <img src={commentImage} />
              <p>{list.comments}</p>
            </ProductPlane.CommentNumberImage>
            <ProductPlane.CommentText>
              Comments {list.comments}
            </ProductPlane.CommentText>
          </ProductPlane.CommentImageArea>
        </ProductPlane.BodyContainer>
        <ProductPlane.DescriptionContainer>
          <p>{list.description}</p>
        </ProductPlane.DescriptionContainer>
        <ProductPlane.FooterConainer>
          <ProductPlane.MoreOfferContainer>
            <img src={vector84} />
            <span>
              <a>more offers</a>
            </span>
          </ProductPlane.MoreOfferContainer>
          <ProductPlane.ButtonContainer>
            <Button size="vbig" variant="orange">
              Get Coupon
            </Button>
          </ProductPlane.ButtonContainer>
        </ProductPlane.FooterConainer>
      </ProductPlane.CardContainer>
    </ProductPlane.CardWrapper>
  );
};

export default MobileRcdProduct;
