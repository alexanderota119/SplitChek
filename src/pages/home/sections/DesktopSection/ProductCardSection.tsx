//! styles
import {
  ProductSectionContainer,
  CircleContainer1,
  CircleContainer2,
  CircleContainer3,
  CircleContainer4,
  DotContainer5,
} from "site-settings/site-style/home/ProductCardSection.style";

//! components
import ProductCard from "components/ProductCard/desktop/index";
import ProductCarsouelCard from "components/ProductCarsouelCard/desktop";
import { FormattedMessage } from "react-intl";
//! datas
import { data } from "data/home/desktop/ProductCardSection";
import Circle from "components/Circle";

import dotGroup from "assets/images/home/dotGroup.svg";

const ProductCardSection: React.FC = () => {
  return (
    <ProductSectionContainer>
      <h3>
        <FormattedMessage
          id="searchresult"
          defaultMessage="About 45,800,000 results (0.88 seconds) shopping on behalf of David Oabile"
        />
      </h3>
      {data.map((item, key) => {
        return item.type == "product" ? (
          <ProductCard key={key} list={item}></ProductCard>
        ) : (
          <ProductCarsouelCard key={key} list={item}></ProductCarsouelCard>
        );
      })}
      <CircleContainer1>
        <Circle color="rgba(149, 149, 149, 0.1)" diameter="76px"></Circle>
      </CircleContainer1>
      <CircleContainer2>
        <Circle color="rgba(149, 149, 149, 0.1)" diameter="80px"></Circle>
      </CircleContainer2>
      <CircleContainer3>
        <Circle color="rgba(149, 149, 149, 0.1)" diameter="172px"></Circle>
      </CircleContainer3>
      <CircleContainer4>
        <Circle color="rgba(243, 229, 232, 0.2)" diameter="150px"></Circle>
      </CircleContainer4>
      <DotContainer5>
        <img src={dotGroup}></img>
      </DotContainer5>
    </ProductSectionContainer>
  );
};

export default ProductCardSection;
