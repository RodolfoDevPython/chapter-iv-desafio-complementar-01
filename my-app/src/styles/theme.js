import { extendTheme } from "@chakra-ui/react";


export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#47585B",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#47585B",
      "400": "#999999",
      "300": "#DADADA",
      "200": "#B3B5C6",
      "100": "#F5F8FA",
      "50": "#EEEEF2",
    },
    yellow: {
      '500': '#FFBA08'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  }
})