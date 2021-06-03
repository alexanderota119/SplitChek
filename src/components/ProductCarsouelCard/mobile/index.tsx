import * as Card from "./index.style";

//!import components
import CustomSlider from "components/Slider/index";
import { Button } from "components/Button/button";

//! import image
import commentImage from "assets/images/home/image14.png";

const MobileCarsouelCard = ({ list, settings }) => {
  return (
    <Card.CardWrapper>
      <Card.CardContainer>
        <Card.CarsouelContainer>
          <CustomSlider settings={settings} arrowPosition="-10px">
            {list.images.map((item, key) => {
              return (
                <div className="imgArea" key={key}>
                  <img src={item.src} />
                </div>
              );
            })}
          </CustomSlider>
        </Card.CarsouelContainer>
        <Card.TitleContainer>
          <h5>{list.title}</h5>
        </Card.TitleContainer>
        <Card.BodyContainer>
          <Card.PriceContainer>
            <div className="price">
              <p>aud {list.price}</p>
            </div>
            <p>
              <b>Sold by: </b>
              {list.soldBy}
            </p>
          </Card.PriceContainer>
          <Card.CommentImageArea>
            <Card.CommentNumberImage>
              <img src={commentImage} />
              <p>{list.comments}</p>
            </Card.CommentNumberImage>
            <Card.CommentText>Comments {list.comments}</Card.CommentText>
          </Card.CommentImageArea>
        </Card.BodyContainer>
        <Card.ShipsFromText>
          <p>
            <b>Ships From: </b>
            {list.shipsFrom}
          </p>
        </Card.ShipsFromText>
        <Card.DescriptionContainer>
          <p>{list.description}</p>
        </Card.DescriptionContainer>
        <Card.TagGroupContainer>
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
        </Card.TagGroupContainer>
        <Card.FooterContainer>
          <Button size="vbig" variant="orange">
            Open
          </Button>
        </Card.FooterContainer>
      </Card.CardContainer>
    </Card.CardWrapper>
  );
};

export default MobileCarsouelCard;
