import SponsordCard from "components/SponsoredCard/";
import image20 from "assets/images/home/image20.png";
import {
  CardContainer,
  SponsoredSectionArea,
} from "../../../site-settings/site-style/home/SponsoredSection.style";

const data = [
  {
    src: image20,
    title: "INCREDIBLY CLEAR ACNE 14.7ML",
    description:
      "Do you want a clearer skin? Then you found the right product. The solution is salycylic acid, glycolic acid and white willow bark...",
    shipsFrom: "Queensland - Australia",
    price: "$22.95",
    isTop: true,
  },
  {
    src: image20,
    title: "INCREDIBLY CLEAR ACNE 14.7ML",
    description:
      "Do you want a clearer skin? Then you found the right product. The solution is salycylic acid, glycolic acid and white willow bark...",
    shipsFrom: "Queensland - Australia",
    price: "$22.95",
    isTop: true,
  },
  {
    src: image20,
    title: "INCREDIBLY CLEAR ACNE 14.7ML",
    description:
      "Do you want a clearer skin? Then you found the right product. The solution is salycylic acid, glycolic acid and white willow bark...",
    shipsFrom: "Queensland - Australia",
    price: "$22.95",
    isTop: true,
  },
  {
    src: image20,
    title: "INCREDIBLY CLEAR ACNE 14.7ML",
    description:
      "Do you want a clearer skin? Then you found the right product. The solution is salycylic acid, glycolic acid and white willow bark...",
    shipsFrom: "Queensland - Australia",
    price: "$22.95",
    isTop: true,
  },
];

const SponsoredCardSection: React.FC = () => {
  return (
    <SponsoredSectionArea>
      <h2>Sponsored:</h2>
      <CardContainer>
        {data.map((item, key) => {
          return <SponsordCard key={key} list={item}></SponsordCard>;
        })}
      </CardContainer>
    </SponsoredSectionArea>
  );
};

export default SponsoredCardSection;
