import {
  SearchContainer,
  CardContainer,
} from "site-settings/site-style/home/Mobile/SearchSection.style";

//! import components
import MobileProductCard from "components/ProductCard/mobile/index";
import MobileCarsouelCard from "components/ProductCarsouelCard/mobile/index";
import MobileRcdProduct from "components/RcdProductCard/mobile/index";

import { data } from "data/home/mobile/SearchSection";

const settings = {
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
};

const SearchSection = () => {
  return (
    <SearchContainer>
      <h3>
        About 45,800,000 results (0.88 seconds) shopping on behalf of David
        Oabile
      </h3>
      <CardContainer>
        {data.map((item, key) => {
          {
            if (item.type == "product") {
              return (
                <MobileProductCard list={item} key={key}></MobileProductCard>
              );
            } else if (item.type == "carsouel") {
              return (
                <MobileCarsouelCard
                  list={item}
                  settings={settings}
                  key={key}
                ></MobileCarsouelCard>
              );
            } else {
              return (
                <MobileRcdProduct list={item} key={key}></MobileRcdProduct>
              );
            }
          }
        })}
      </CardContainer>
    </SearchContainer>
  );
};

export default SearchSection;
