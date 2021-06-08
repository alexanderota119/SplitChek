import styled from "styled-components";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
type ArrowPosition = {
  arrowPosition: string;
  arrowTopPosition: string;
  hide: boolean;
};
const ArrowContainer = styled.div<ArrowPosition>`
  position: absolute;
  left: calc(-5px + ${(props) => props.arrowPosition});
  top: calc(50% - ${(props) => props.arrowTopPosition});
  border-radius: 50%;
  background-color: white;
  visibility: ${(props) => (props.hide == true ? "hidden" : "visible")};
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
    background-color: orange;
  }
  &:active {
    transform: scale(0.9);
    background-color: orange;
  }
`;

const PrevArrow = (props) => {
  let flagToPosition = false;
  //it means that move the default action.
  if (props.hide == false) {
    flagToPosition = false;
  } //it means that do the arrow show and hiddden mode.
  else {
    if (props.currentSlide > 0) {
      flagToPosition = false;
    } else {
      flagToPosition = true;
    }
  }
  return (
    <ArrowContainer
      onClick={props.onClick}
      arrowPosition={props.arrowPosition}
      arrowTopPosition={props.arrowTopPosition}
      hide={flagToPosition}
    >
      <HiOutlineChevronDoubleLeft color="#ABB1BB" />
    </ArrowContainer>
  );
};

export default PrevArrow;
