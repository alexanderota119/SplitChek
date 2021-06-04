import React from "react";
import styled, { keyframes } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import css from "@styled-system/css";
import { compose, variant, border, space, layout } from "styled-system";

type StyledProps = {
  [key: string]: unknown;
  btnColor: string;
};
export const StyledButton = styled.button(
  (props: StyledProps) =>
    css({
      px: "20px",
      py: "20px",
      fontSize: ["base"],
      fontWeight: "bold",
      cursor: props.disabled ? "not-allowed" : "pointer",
      transition: "all 0.3s ease",
    }),
  {
    zIndex: 20,
    appearance: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    textAlign: "center",
    height: "38px",
    textDecoration: "none",
    fontFamily: "inherit",
    borderRadius: "14px",

    "&:focus": {
      outline: "none",
    },
    "&:active": {
      transform: "scale(0.9)",
    },
  },
  variant({
    variants: {
      orange: {
        color: "white",
        bg: "orange.regular",
        border: "none",
        "&:hover": { bg: "orange.dark" },
      },
      blue: {
        color: "white",
        bg: "blue.regular",
        border: "none",
        "&:hover": { bg: "blue.dark" },
      },

      green: {
        color: "white",
        bg: "#4ECDC4",
        border: "none",
        "&:hover": { bg: "#4ECDC4" },
      },
      outlinedBlue: {
        color: "blue.regular",
        bg: "white",
        border: "1px solid",
        borderColor: "blue.regular",
        "&:hover": {
          borderColor: "blue.dark",
          color: "blue.dark",
        },
      },
      outlinedbitDarkBlue: {
        border: "2px solid",
        borderColor: "#36558F",
        color: "#36558F",
        bg: "white",
        "&:hover": {
          bg: "#36558F",
          color: "white",
        },
      },
      outlinedbitBlue: {
        color: "#4ECDC4",
        bg: "white",
        border: "1px solid",
        borderColor: "#4ECDC4",
        "&:hover": {
          bg: "#4ECDC4",
          color: "white",
        },
      },
      outlinedGray: {
        color: "gray.750",
        bg: "white",
        border: "1px solid",
        borderColor: "gray.750",
        "&:hover": {
          borderColor: "orange.regular",
          color: "orange.regular",
        },
      },
    },
  }),
  variant({
    prop: "size",
    variants: {
      big: {
        height: "58px",
        fontSize: 16,
        px: 21,
        py: 21,
      },
      vbig: {
        height: "42px",
        fontSize: 16,
        px: 43,
      },
      small: {
        height: "42px",
        fontSize: 14,
        px: 26,
        py: 12,
      },
      vsmall: {
        height: "35px",
        fontSize: 12,
        px: 2,
        py: 2,
      },
      long: {
        height: "58px",
        fontSize: 16,
        px: 90,
        py: 21,
      },
    },
  }),
  compose(border, space, layout)
);
const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const Spinner = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 10px;
  border: 3px solid #ffffff;
  border-top: 3px solid
    ${(props) =>
      props.color ? props.color : themeGet("primary.regular", "#009E7F")};
  border-radius: 50%;
  transition-property: transform;
  animation-name: ${rotate};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

type Props = {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  type: "submit" | "button";
  [key: string]: unknown;
  btnColor: string;
};
export type Ref = HTMLButtonElement;
export const Button = React.forwardRef<Ref, Props>(
  ({ children, disabled, loading = false, ...props }, ref) => (
    <StyledButton ref={ref} {...props} disabled={disabled}>
      {children}
      {loading && <Spinner />}
    </StyledButton>
  )
);
