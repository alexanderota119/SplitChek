import styled, { createGlobalStyle } from "styled-components";
import { get } from "styled-system";
import css from "@styled-system/css";

export const InjectRTL = styled.div`
  ${({ lang }) =>
    (lang === "ar" || lang === "he") &&
    `
    font-family: 'Cairo', sans-serif;
    `}
`;

export const GlobalStyle = createGlobalStyle(({ theme }) =>
  css({
    "*, *::before, *::after": {
      boxSizing: "border-box",
      outline: "none !important",
    },
    html: {
      overflowX: "hidden",
    },
    body: {
      maxWidth: "1920px",
      margin: "0 auto",
      overflowX: "hidden",
      fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
      fontWeight: "regular",
      fontSize: "base",
      lineHeight: "1.5",
      backgroundColor: "white",
      transition: get(theme, "customs.transition"),
      WebkitTextSizeAdjust: "100%",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      textShadow: "1px 1px 1px rgba(0, 0, 0, 0.004)",
    },
    h1: {
      fontFamily: "base",
      fontSize: "5xl",
      fontWeight: "bolder",
      zIndex: 10,
      margin: 0,
    },
    h2: {
      fontFamily: "base",
      fontSize: "4xl",
      fontWeight: "bold",
      zIndex: 10,
      margin: 0,
    },
    h3: {
      fontFamily: "base",
      fontSize: "xl",
      fontWeight: "bold",
      zIndex: 10,
      margin: 0,
    },
    h4: {
      fontFamily: "base",
      fontSize: "xl",
      fontWeight: "regular",
      zIndex: 10,
      margin: 0,
    },
    h5: {
      fontFamily: "base",
      fontSize: "mm",
      fontWeight: "bold",
      zIndex: 10,
      marginBottom: "14px",
    },
    h6: {
      fontFamily: "base",
      fontSize: "base",
      fontWeight: "medium",
      zIndex: 10,
      margin: 0,
    },

    "p,span,button,li,div": {
      fontFamily: "base",
      margin: 0,
    },
    a: {
      fontFamily: "base",
      textDecoration: "none",
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    li: {
      listStyle: "none",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    button: {
      appearance: "none",
    },
    img: {
      maxWidth: "100%",
    },
    ".flickity-button": {
      display: "none",
    },
    ".title": {
      fontWeight: "bold",
      fontSize: "42px",
      color: "#140A01",
      zIndex: 20,
    },
    ".wrapper": {
      maxWidth: "1400px",
      margin: "0 auto",
      position: "relative",
      zIndex: "10",
    },
    ".container": {
      paddingLeft: "98px",
      paddingRight: "95px",
      margin: "0 auto",
      maxWidth: "none",
      "@media screen and (max-width: 768px)": {
        padding: "20px 55px",
      },
      "@media screen and (max-width: 480px)": {
        padding: "11px 15px",
      },
    },
    ".circle": {
      borderRadius: "50%",
      position: "absolute",
      zIndex: 0,
      "@media screen and (max-width: 768px)": {
        zIndex: -1,
      },
    },
    //@ts-ignore
    ...theme.globals,
  })
);
