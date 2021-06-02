import React from "react";
import styled from "styled-components";
import { Button } from "components/Button/button";
type Props = {
  src;
  title?: string;
};

const CarsouleCellArea = styled.div`
  display: flex;
  width: 141px;
  height: 165px;
  flex-direction: column;
  justify-content: space-between;
  padding: 17px 14px 14px 11px;
  border: 1px solid #bacdd8;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin-bottom: 5px;
  @media screen and (max-width: 1399px) {
    width: 130px;
    height: 150px;
    padding: 10px 10px 10px 10px;
  }
`;

const CarsouleImage = styled.div`
  margin: 0 auto;
  border-radius: 16x;
  max-width: 116px;
  max-height: 86px;
  & img {
    max-width: 116px;
    max-height: 86px;
  }
`;

const Carsoulebutton = styled.div`
  margin: 0 auto;
`;

const CarsouelCell: React.FC<Props> = ({ src, title }) => {
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
    </CarsouleCellArea>
  );
};

export default CarsouelCell;
