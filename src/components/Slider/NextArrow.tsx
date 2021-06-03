import styled from "styled-components";

import { HiOutlineChevronDoubleRight } from "react-icons/hi";
type ArrowPosition = {
  arrowPosition: string;
};
const ArrowContainer = styled.div<ArrowPosition>`
  position: absolute;
  right: calc(-5px + ${(props) => props.arrowPosition});
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
    background-color: orange;
  }
  &:active {
    transform: scale(0.9);
    background-color: orange;
  }
`;
const NextArrow = (props) => {
  return (
    <ArrowContainer arrowPosition={props.arrowPosition} onClick={props.onClick}>
      <HiOutlineChevronDoubleRight color="#ABB1BB" />
    </ArrowContainer>
  );
};

export default NextArrow;
