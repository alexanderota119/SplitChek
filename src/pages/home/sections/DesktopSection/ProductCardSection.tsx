//! styles
import { ProductSectionContainer } from "site-settings/site-style/home/ProductCardSection.style";

//! components
import ProductCard from "components/ProductCard/desktop/index";
import ProductCarsouelCard from "components/ProductCarsouelCard/desktop";

//! datas
import { data } from "data/home/desktop/ProductCardSection";

const ProductCardSection: React.FC = () => {
  return (
    <ProductSectionContainer>
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

export default ProductCardSection;
