import styled from "styled-components";

const BargainWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const BargainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
type BargainImageCircle = {
  color: string;
};

import bargainCard3 from "assets/images/home/bargain-card3.png";
import { Button } from "components/Button/button";

const BargainImageCard = styled.div<BargainImageCircle>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  & .circle {
    width: 120px;
    height: 120px;
    border-radius: 100%;
    background: ${(props) => props.color};
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
  & img {
    width: 110px;
    height: 110px;
    z-index: 2;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 7px;
`;

const BargainCard = ({ item }) => {
  return (
    <BargainWrapper>
      <BargainContainer>
        <BargainImageCard color={item.color}>
          <div className="circle"></div>
          <img src={item.src}></img>
        </BargainImageCard>
        <ButtonContainer>
          <Button size="vsmall" variant="outlinedbitBlue">
            {item.title}
          </Button>
        </ButtonContainer>
      </BargainContainer>
    </BargainWrapper>
  );
};

export default BargainCard;
