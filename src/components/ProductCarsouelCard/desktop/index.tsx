import React from "react";
import { Button } from "components/Button/button";
import CustomSlider from "components/Slider/index";

import commentImage from "assets/images/home/image14.png";
import Reaction from "components/Reaction/index";
import badge1 from "assets/images/home/ellipse136.png";
import badge2 from "assets/images/home/ellipse137.png";
import * as Plane from "./index.styled";

type Props = {
  list;
};

const settings = {
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
};

const ProductCarsouelCard: React.FC<Props> = ({ list }) => {
  return (
    <Plane.ProductCarsouelCardArea>
      <Plane.LeftContainer>
        <Plane.ProductionContainer>
          <Plane.CarsouelContainer>
            <CustomSlider settings={settings} arrowPosition="-10px">
              {list.data.map((item, key) => {
                return (
                  <div className="imgArea" key={key}>
                    <img src={item.src} />
                  </div>
                );
              })}
            </CustomSlider>
          </Plane.CarsouelContainer>
          <Plane.DescriptionContainer>
            <Plane.DescriptionHeader>
              <h5>{list.title}</h5>
            </Plane.DescriptionHeader>
            <Plane.DescriptionBody>
              <p>{list.description}</p>
            </Plane.DescriptionBody>
          </Plane.DescriptionContainer>
        </Plane.ProductionContainer>
        <Plane.ProductInfoContainer>
          {list.isTop ? (
            <>
              <Plane.BadgeContainer>
                <div className="imageSection1">
                  <img src={badge1} />
                </div>
                <div className="imageSection2">
                  <img src={badge2} />
                </div>
              </Plane.BadgeContainer>
              <Plane.ProductPropertyContainer>
                <Plane.TagContainer>
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
                </Plane.TagContainer>
                <Plane.SoldByContainer>
                  <Plane.FooterBody>
                    <p>
                      <b>Sold by: </b>
                      {list.soldBy}
                    </p>
                  </Plane.FooterBody>
                  <Plane.FooterBody>
                    <p>
                      <b>Shops From: </b> {list.shipsFrom}
                    </p>
                  </Plane.FooterBody>
                </Plane.SoldByContainer>
              </Plane.ProductPropertyContainer>
            </>
          ) : (
            <>
              <Plane.ProductPropertyContainer>
                <Plane.TagContainer>
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
                </Plane.TagContainer>
                <Plane.SoldByContainer>
                  <Plane.FooterBody>
                    <p>
                      <b>Sold by: </b>
                      {list.soldBy}
                    </p>
                  </Plane.FooterBody>
                  <Plane.FooterBody>
                    <p>
                      <b>Shops From: </b> {list.shipsFrom}
                    </p>
                  </Plane.FooterBody>
                </Plane.SoldByContainer>
              </Plane.ProductPropertyContainer>
            </>
          )}
        </Plane.ProductInfoContainer>
      </Plane.LeftContainer>
      <Plane.CommentContainer>
        <Reaction comments={list.comment}></Reaction>
        <Plane.PriceContainer>
          <p>{list.price}</p>
        </Plane.PriceContainer>
        <Button size="vbig" variant="orange">
          Open
        </Button>
      </Plane.CommentContainer>
    </Plane.ProductCarsouelCardArea>
  );
};

export default ProductCarsouelCard;
