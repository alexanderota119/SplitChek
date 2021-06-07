import React from "react";
import { Button } from "components/Button/button";
import ColorText from "components/ColorText/color-text";
import * as Card from "./index.styled";
import { FormattedMessage } from "react-intl";

type Props = {
  list;
};

const RcdCarsouelCard: React.FC<Props> = ({ list }) => {
  return (
    <Card.CardWrapper>
      <Card.CardContainer>
        <Card.ProductContainer>
          <Card.ProductImageContainer>
            <img src={list.src} />
          </Card.ProductImageContainer>
          <Card.AuthorContainer>
            <ColorText color="gray.product">
              <FormattedMessage
                id="recommend.dave"
                defaultMessage="Perfect gift for"
              ></FormattedMessage>
            </ColorText>{" "}
            <ColorText>
              <FormattedMessage
                id="recommend.name"
                defaultMessage="Dave Smith"
              ></FormattedMessage>
            </ColorText>
          </Card.AuthorContainer>
        </Card.ProductContainer>
        <Card.DescriptionContainer>
          <Card.DescriptionHeader>
            <h5>{list.title}</h5>
          </Card.DescriptionHeader>
          <Card.PriceTitle>
            <p>{list.price}</p>
          </Card.PriceTitle>
          <Card.DescriptionFooter>
            <img src={list.avatar}></img>
            <Button size="vbig" variant="orange">
              <FormattedMessage
                id="recommend.open"
                defaultMessage="open"
              ></FormattedMessage>
            </Button>
          </Card.DescriptionFooter>
        </Card.DescriptionContainer>
      </Card.CardContainer>
    </Card.CardWrapper>
  );
};

export default RcdCarsouelCard;
