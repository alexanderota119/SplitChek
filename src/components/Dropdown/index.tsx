import React, { useState, useEffect, useRef } from "react";
// import styled from "styled-components";

// const StyledDropDown = styled.div`
//   position: relative;
//   width: auto;
// `;
// const StyledDropDownDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   z-index: 9999;
//   color: white;
//   padding: 16px 0;
//   top: 55px;
//   right: 0;
//   position: absolute;
//   border-radius: 8px;
//   background-color: white;
//   border: 1px solid white;
//   display: ${({ hide }) => (hide ? "block" : "none")};
//   width: 50%;
//   min-width: 140px;
//   max-height: 200px;
//   overflow: auto;
// `;
// const StyledDropDownHeader = styled.div`
//   cursor: pointer;
//   h3 {
//     color: ${theme.textBlue};
//     font-weight: bold;
//   }
//   height: 48px;
//   padding: 0 15px;
//   padding-bottom: 10px;
//   margin-right: 12px;
//   text-align: left;
//   font-weight: bold;
//   display: flex;
//   align-items: center;
//   img {
//     height: 28px;
//     margin-right: 12px;
//   }
//   :after {
//     border: 2px solid white;
//     border-radius: 2px;
//     border-right: 0;
//     border-top: 0;
//     content: " ";
//     display: block;
//     margin-top: -0.5em;
//     pointer-events: none;
//     position: absolute;
//     top: 50%;
//     transform: rotate(-45deg);
//     transform-origin: center;
//     height: 10px;
//     width: 10px;
//     top: 25px;
//     right: 10px;
//     transition: border-color 0.15s ease-in-out;
//   }

//   &:hover {
//   }
// `;

// const StyledDropDownItemDiv = styled.div`
//   margin: 0 12px;
//   padding: 8px 12px;
//   text-align: left;
//   font-size: 0.9rem;
//   font-weight: bold;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   cursor: pointer;
//   img {
//     height: 28px;
//     margin-right: 12px;
//   }

//   &:hover {
//     background-color: rgba(255, 255, 255, 0.05);
//   }

//   .check-mark {
//     display: ${(props) => (props.isSelect ? "inline" : "none")};
//     margin-bottom: 6px;
//     transform: rotate(45deg);
//     height: 12px;
//     width: 8px;
//     border-bottom: 2px solid ${theme.textBlue};
//     border-right: 2px solid ${theme.textBlue};
//   }
// `;
// const Dropdown = ({ list, label, click }) => {
//   const [current, setCurrent] = useState({});
//   const [hide, setHide] = useState(false);
//   const dropMenuRef = useRef(null);

//   useEffect(() => {
//     setCurrent(list[0]);
//   }, []);

//   const handleClickOutside = (e) => {
//     if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {
//       return;
//     }
//     setHide(false);
//   };

//   useEffect(() => {
//     if (hide) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [hide]);

//   return (
//     <StyledDropDown>
//       <StyledDropDownHeader onClick={() => setHide(!hide)}>
//         <h3>{current.label}</h3>
//       </StyledDropDownHeader>
//       <StyledDropDownDiv ref={dropMenuRef} hide={hide}>
//         {list.map((item, index) => {
//           return (
//             <StyledDropDownItemDiv
//               isSelect={current.id === item.id}
//               key={`__key-${index.toString()}`}
//               onClick={() => {
//                 setHide(false);
//                 setCurrent(item);
//                 click(item);
//               }}
//             >
//               {item.label}
//               <span className="check-mark"></span>
//             </StyledDropDownItemDiv>
//           );
//         })}
//       </StyledDropDownDiv>
//     </StyledDropDown>
//   );
// };

// export default Dropdown;
