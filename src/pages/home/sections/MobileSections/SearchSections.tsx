import {
  SearchContainer,
  CardContainer,
} from "site-settings/site-style/home/Mobile/SearchSection.style";

//! import components
import MobileProductCard from "components/ProductCard/mobile/index";
import MobileCarsouelCard from "components/ProductCarsouelCard/mobile/index";
import MobileRcdProduct from "components/RcdProductCard/mobile/index";
import { FormattedMessage } from "react-intl";
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
        <FormattedMessage id="searchresult" />
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
