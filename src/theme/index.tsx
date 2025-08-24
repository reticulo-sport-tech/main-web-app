import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Poppins",
    heading: "Poppins",
  },
  colors: {
    brand: {
      50: "#EEF2FF",
      100: "#E0E7FF",
      200: "#C7D2FE",
      300: "#A5B4FC",
      400: "#818CF8",
      500: "#6366F1",
      600: "#4F46E5",
      700: "#4338CA",
      800: "#3730A3",
      900: "#312E81",
    },
    accent: {
      500: "#2563EB",
      600: "#1D4ED8",
    },
  },
  shadows: {
    largeSoft: "rgba(2, 6, 23, 0.08) 0px 8px 24px",
  },
  styles: {
    global: {
      "html, #__next": {
        height: "100%",
      },
      "#__next": {
        display: "flex",
        flexDirection: "column",
      },
      ".body": {
        // todo check how to do this without breaking the site
        // height: '100%', // Push footer to bottom
        overflowY: "scroll", // Always show scrollbar to avoid flickering
      },
      html: {
        scrollBehavior: "smooth",
      },
      "#nprogress": {
        pointerEvents: "none",
      },
      "#nprogress .bar": {
        background: "brand.400",
        position: "fixed",
        zIndex: "1031",
        top: 0,
        left: 0,
        width: "100%",
        height: "2px",
      },
    },
  },
});
