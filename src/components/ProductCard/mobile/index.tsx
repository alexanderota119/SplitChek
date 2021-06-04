import React from "react";
import { Button } from "components/Button/button";
import commentImage from "assets/images/home/image14.png";
import badge1 from "assets/images/home/ellipse136.png";
import badge2 from "assets/images/home/ellipse137.png";
import * as Card from "./index.styled";
import Reaction from "components/Reaction/index";
type Props = {
  list;
};

const MobileProductCard: React.FC<Props> = ({ list }) => {
  return (
    <Card.CardWrapper>
      <Card.CardContainer>
        <Card.ProductContainer>
          <img src={list.src} />
          <Card.CommentContainer>
            <Card.ReactionArea>
              <Reaction comments={list.comments}></Reaction>
            </Card.ReactionArea>

            <Card.PriceContainer>
              <div className="price">
                <p>AUD {list.price}</p>
              </div>
              <div className="sold-by">
                <p>
                  <b>Sold by: </b>
                  {list.soldBy}
                </p>
              </div>
              <div className="ships-from">
                <p>
                  <b>Ships From: </b>
                  {list.shipsFrom}
                </p>
              </div>
            </Card.PriceContainer>
          </Card.CommentContainer>
        </Card.ProductContainer>
        <Card.DescriptionContainer>
          <h5>{list.title}</h5>
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
        <Card.BadgeContainer>
          {list.isTop ? (
            <div className="imageGroup">
              <div className="imageSection1">
                <img src={badge1} />
              </div>
              <div className="imageSection2">
                <img src={badge2} />
              </div>
            </div>
          ) : (
            <p></p>
          )}
          <Button size="vbig" variant="orange">
            Open
          </Button>
        </Card.BadgeContainer>
      </Card.CardContainer>
    </Card.CardWrapper>
  );
};

export default MobileProductCard;
