import styled from "styled-components";

type StyledActiveProps = {
  hide: boolean;
};

export const MenuItemContainer = styled.div<StyledActiveProps>`
  display: flex;
  justify-content: start;
  align-items: center;
  & p {
    margin-bottom: 0px;
    font-size: 14px;
    line-height: 140%;
    color: ${({ hide }) => (hide ? "orange" : "#36558f")};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16.8px;
`;
