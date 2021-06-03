import CarsouelSection from "../DesktopSection/CarsouelSection";
import SponsoredCardSection from "../DesktopSection/SponsoredSection";
import SearchSection from "./SearchSections";
import RecommendSection from "../DesktopSection/RecommendSection";

import SearchProductSection from "./SearchProductSection";
import SponsoredBottomSlider from "../DesktopSection/SponsoredBottomSlider";

const MobileSettings = {
  initialIndex: 1,
  groupCells: 1,
};
const MobileSections = () => {
  return (
    <>
      <CarsouelSection setting={MobileSettings} mobile={true}></CarsouelSection>
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
