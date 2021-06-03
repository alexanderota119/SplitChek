import styled from "styled-components";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
type ArrowPosition = {
  arrowPosition: string;
};
const ArrowContainer = styled.div<ArrowPosition>`
  position: absolute;
  left: calc(-5px + ${(props) => props.arrowPosition});
  top: calc(50% - 16px);
  border-radius: 50%;
  background-color: white;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const PrevArrow = (props) => {
  return (
    <ArrowContainer onClick={props.onClick} arrowPosition={props.arrowPosition}>
      <HiOutlineChevronDoubleLeft color="#ABB1BB" />
    </ArrowContainer>
  );
};

export default PrevArrow;
