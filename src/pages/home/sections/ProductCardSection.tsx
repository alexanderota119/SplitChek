import pdt1 from "assets/images/home/image20.png";
import banner16 from "assets/images/home/banner16.png";
import ProductCard from "components/ProductCard/desktop/index";
import ProductCarsouelCard from "components/ProductCarsouelCard/desktop";
import { ProductSectionContainer } from "../../../site-settings/site-style/home/ProductCardSection.style";
const data = [
  {
    src: pdt1,
    title: "INCREDIBLY CLEAR ACNE 14.7ML",
    description:
      "Do you want a clearer skin? Then you found the right product. The solution is salycylic acid, glycolic acid and white willow bark...",
    soldBy: "Rekisa",
    shipsFrom: "Queensland - Australia",
    price: "AUD $22.95",
    comment: 56,
    isTop: true,
    type: "product",
  },
  {
    src: pdt1,
    title: "INCREDIBLY CLEAR ACNE 14.7ML",
    description:
      "Do you want a clearer skin? Then you found the right product. The solution is salycylic acid, glycolic acid and white willow bark...",
    soldBy: "Rekisa",
    shipsFrom: "Queensland - Australia",
    price: "AUD $22.95",
    comment: 56,
    isTop: false,
    type: "product",
  },
  {
    title: "INCREDIBLY CLEAR ACNE 14.7ML",
    description:
      "Do you want a clearer skin? Then you found the right product. The solution is salycylic acid, glycolic acid and white willow bark...",
    soldBy: "Rekisa",
    shipsFrom: "Queensland - Australia",
    price: "AUD $22.95",
    comment: 56,
    isTop: false,
    type: "carsouel",
    data: [
      {
        src: banner16,
      },
      {
        src: banner16,
      },
    ],
  },
  {
    title: "INCREDIBLY CLEAR ACNE 14.7ML",
    description:
      "Do you want a clearer skin? Then you found the right product. The solution is salycylic acid, glycolic acid and white willow bark...",
    soldBy: "Rekisa",
    shipsFrom: "Queensland - Australia",
    price: "AUD $22.95",
    comment: 56,
    isTop: true,
    type: "carsouel",
    data: [
      {
        src: banner16,
      },
      {
        src: banner16,
      },
    ],
  },
];

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
