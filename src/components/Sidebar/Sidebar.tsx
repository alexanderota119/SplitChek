import styled from "styled-components";
type SideBarProps = {
  open: boolean;
};
const StyledBar = styled.div<SideBarProps>`
  display: flex;
  background: #ffffff;
  z-index: 100000;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 90vw;
  border-top-right-radius: 60px;
  overflow: auto;
`;

const MoblieSidebar = ({ open, children }) => {
  return <StyledBar open={open}>{children}</StyledBar>;
};
export default MoblieSidebar;
