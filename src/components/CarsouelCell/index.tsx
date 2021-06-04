import React from "react";
import styled from "styled-components";
import playButtonImage from "assets/images/home/play.svg";
import { Button } from "components/Button/button";
type Props = {
  src;
  title?: string;
  isVideo: boolean;
};

const CarsouleCellArea = styled.div`
  position: relative;
  display: flex;
  max-width: 141px;
  max-height: 165px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 13px 14px 14px 14px;
  border: 1px solid #bacdd8;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin-bottom: 5px;
  margin-right: 10px;
  maring-left: 20px;
  @media screen and (max-width: 768px) {
    margin-right: 8px;
  }
`;

const CarsouleImage = styled.div`
  border-radius: 16x;
  max-width: 116px;
  max-height: 86px;
  margin-bottom: 17px;
  & img {
    max-width: 116px;
    max-height: 86px;
  }
`;

const Carsoulebutton = styled.div`
  margin: 0 auto;
  & Button {
    padding: 6px;
    width: auto;
    height: 35px;
    font-size: 12px;
  }
`;

const PlayButtonContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 80%;
  top: 0px;
  left: 0px;
  justify-content: center;
  align-items: center;
`;

const CarsouelCell: React.FC<Props> = ({ src, title, isVideo = false }) => {
  return (
    <CarsouleCellArea>
      <CarsouleImage>
        <img src={src} />
      </CarsouleImage>
      <Carsoulebutton>
        <Button size="vsmall" variant="outlinedbitBlue">
          {title}
        </Button>
      </Carsoulebutton>
      {isVideo ? (
        <PlayButtonContainer>
          <img src={playButtonImage} />
        </PlayButtonContainer>
      ) : (
        <></>
      )}
    </CarsouleCellArea>
  );
};

export default CarsouelCell;
