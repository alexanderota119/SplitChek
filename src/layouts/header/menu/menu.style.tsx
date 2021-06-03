import styled from "styled-components";

export const MenuNav = styled.div`
  margin-left: auto;
  & ul {
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & li {
      margin-left: 27px;
      @media screen and (max-width: 950px) {
        margin-left: 10px;
      }
    }
  }
`;
