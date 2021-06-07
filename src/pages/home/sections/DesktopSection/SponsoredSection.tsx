import SponsordCard from "components/SponsoredCard/";

import {
  CardContainer,
  SponsoredSectionArea,
} from "site-settings/site-style/home/SponsoredSection.style";

import { FormattedMessage, useIntl } from "react-intl";

import { data, MobileData } from "data/home/desktop/SponsoredSection";
const SponsoredCardSection: React.FC = () => {
  return (
    <SponsoredSectionArea>
      <h3>
        <FormattedMessage
          id="sponsored.header"
          defaultMessage="Sponsored:"
        ></FormattedMessage>
      </h3>
      <CardContainer>
        {MobileData.map((item, key) => {
          return <SponsordCard key={key} list={item}></SponsordCard>;
        })}
      </CardContainer>
    </SponsoredSectionArea>
  );
};

export default SponsoredCardSection;
