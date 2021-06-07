import CarsouelSection from "../DesktopSection/CarsouelSection";
import SponsoredCardSection from "../DesktopSection/SponsoredSection";
import SearchSection from "./SearchSections";
import RecommendSection from "../DesktopSection/RecommendSection";

import SearchProductSection from "./SearchProductSection";
import MobileSponsoredSlider from "../MobileSections/MobileSponsored";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import BargainSection from "../DesktopSection/BargainSection";
const MobileSettings = {
  initialIndex: 1,
  groupCells: 1,
};
const SearchContainer = styled.div`
  padding-top: 30px;
  & h3 {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #4ecdc4;
  }
`;
const MobileSections = () => {
  return (
    <>
      <CarsouelSection setting={MobileSettings} mobile={true}></CarsouelSection>

      <SearchContainer>
        <h3>
          <FormattedMessage
            id="searchresult"
            defaultMessage="About 45,800,000 results (0.88 seconds) shopping on behalf of David Oabile"
          />
        </h3>
      </SearchContainer>
      <SponsoredCardSection></SponsoredCardSection>
      <SearchSection></SearchSection>
      <RecommendSection></RecommendSection>
      <BargainSection mobile={true}></BargainSection>
      <SearchProductSection />
      <SponsoredCardSection></SponsoredCardSection>
      <MobileSponsoredSlider></MobileSponsoredSlider>
    </>
  );
};

export default MobileSections;
