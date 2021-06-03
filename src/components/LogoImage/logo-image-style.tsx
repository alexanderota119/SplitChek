import styled from "styled-components";
type LogoBoxProps = {
  align?: any;
};

export const LogoBox = styled.span<LogoBoxProps>`
  cursor: pointer;
  margin: 0 20 40;
  display: flex;
  alignitems: center;
  min-width: 123px;
  min-height: 22px;
  @media screen and (max-width: 768px) {
    min-width: 35px;
    min-height: 30px;
  }
  justify-content: ${(props) => props.align || "center"};
`;

export const Logo = styled.img`
  display: block;
  backface-visibility: hidden;
  z-index: 5;
`;
