import React from "react";
import styled from "styled-components";
export const StarBarDiv = styled.div`
  padding: 20px 0 0 0;
  & svg {
    margin-right: 5px;
  }
`;

export const StarBar = ({ count = 5 }) => {
  const colors = [];
  for (let i = 1; i <= 5; i++) {
    if (i > count) {
      colors.push("#C4C4C4");
    } else {
      colors.push("#F77D0E");
    }
  }
  return (
    <StarBarDiv>
      {colors.map((item, index) => (
        <svg
          width={20}
          height={18}
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          key={index}
        >
          <path
            d="M9.08056 1.14989C9.42656 0.34085 10.5734 0.340851 10.9194 1.14989L12.7264 5.37509C12.8711 5.71329 13.1897 5.94478 13.556 5.97783L18.1328 6.39072C19.0092 6.46978 19.3636 7.56053 18.7011 8.13961L15.2411 11.1638C14.9641 11.4059 14.8424 11.7804 14.9242 12.1391L15.9458 16.6195C16.1414 17.4774 15.2136 18.1515 14.4581 17.7003L10.5127 15.3442C10.1969 15.1556 9.80308 15.1556 9.48728 15.3442L5.54188 17.7003C4.78642 18.1515 3.85857 17.4774 4.05419 16.6195L5.07581 12.1391C5.15759 11.7804 5.03588 11.4059 4.75894 11.1638L1.29892 8.13961C0.636399 7.56053 0.990807 6.46978 1.86717 6.39072L6.44397 5.97783C6.81031 5.94478 7.12893 5.71329 7.27356 5.37509L9.08056 1.14989Z"
            fill={item}
          />
        </svg>
      ))}
    </StarBarDiv>
  );
};
