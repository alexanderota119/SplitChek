import ProductCard from "components/ProductCard/desktop/index";
import ProductCarsouelCard from "components/ProductCarsouelCard/desktop";
import {
  ProductSectionContainer,
  LineContainer,
  CircleContainer6,
  DotContainer6,
} from "site-settings/site-style/home/ProductCardSection.style";
import { data } from "data/home/desktop/RecommendProductSection";

import lineSvg from "assets/images/home/line.svg";
import Circle from "components/Circle";
import dotSvg from "assets/images/home/dotGroup2.svg";

const RecommendProductSection: React.FC = () => {
  return (
    <ProductSectionContainer>
      <LineContainer>
        <img src={lineSvg} />
      </LineContainer>
      <CircleContainer6>
        <Circle color="rgba(149, 149, 149, 0.1)" diameter="172px"></Circle>
      </CircleContainer6>
      <DotContainer6>
        <img src={dotSvg} />
      </DotContainer6>
      {data.map((item, key) => {
        return item.type == "product" ? (
          <ProductCard key={key} list={item}></ProductCard>
        ) : (
          <ProductCarsouelCard key={key} list={item}></ProductCarsouelCard>
        );
      })}
    </ProductSectionContainer>
  );
};

export default RecommendProductSection;
