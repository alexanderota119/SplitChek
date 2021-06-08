import SponsordCard from "components/SponsoredCard/";

import {
  CardContainer,
  SponsoredSectionArea,
  CircleContainer,
} from "site-settings/site-style/home/SponsoredSection.style";

import { FormattedMessage, useIntl } from "react-intl";

import { data, MobileData } from "data/home/desktop/SponsoredSection";
import Circle from "components/Circle";
const SponsoredCardSection = ({ mobile = false }) => {
  let temp = data;
  if (mobile) {
    temp = data.slice(0, 2);
  }
  return (
    <SponsoredSectionArea>
      <h3>
        <FormattedMessage
          id="sponsored.header"
          defaultMessage="Sponsored:"
        ></FormattedMessage>
      </h3>
      <CardContainer>
        {temp.map((item, key) => {
          return <SponsordCard key={key} list={item}></SponsordCard>;
        })}
      </CardContainer>
      <CircleContainer>
        <Circle color="rgba(192, 179, 179, 0.15)" diameter="76px"></Circle>
      </CircleContainer>
    </SponsoredSectionArea>
  );
};

export default SponsoredCardSection;
