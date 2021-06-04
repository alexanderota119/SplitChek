import CarsouelSection from "../DesktopSection/CarsouelSection";
import SponsoredCardSection from "../DesktopSection/SponsoredSection";
import SearchSection from "./SearchSections";
import RecommendSection from "../DesktopSection/RecommendSection";

import SearchProductSection from "./SearchProductSection";
import SponsoredBottomSlider from "../DesktopSection/SponsoredBottomSlider";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
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
          <FormattedMessage id="searchresult" />
        </h3>
      </SearchContainer>
      <SponsoredCardSection></SponsoredCardSection>
      <SearchSection></SearchSection>
      <RecommendSection></RecommendSection>
      <SearchProductSection />
      <SponsoredCardSection></SponsoredCardSection>
      <SponsoredBottomSlider />
    </>
  );
};

export default MobileSections;
